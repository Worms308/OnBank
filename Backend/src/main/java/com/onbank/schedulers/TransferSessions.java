package com.onbank.schedulers;

import com.onbank.api.model.Transfer;
import com.onbank.api.model.enums.TransferState;
import com.onbank.api.model.csv.CSVToTransfer;
import com.onbank.api.model.csv.TransferToCSV;
import com.onbank.api.repository.TransferRepository;
import com.onbank.ftp.FtpConnection;
import com.opencsv.exceptions.CsvDataTypeMismatchException;
import com.opencsv.exceptions.CsvRequiredFieldEmptyException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Component
public class TransferSessions {

    @Value("${onbank.server}")
    private String server;
    @Value("${onbank.port}")
    private int port;
    @Value("${onbank.user}")
    private String user;
    @Value("${onbank.password}")
    private String password;
    String transferRemote = "/transfer.csv";

    private final TransferRepository transferRepository;

    @Scheduled(cron = "${onbank.outgoing.transfer.date}")
    public void outgoingTransferMorningSession() {
        System.out.println("Session outgoing");

        String transferOutcoming = "transferOutcoming.csv";
        String outcomingFolders = "csv/outcoming/";

        List<Transfer> transfers = transferRepository.findByRealizationStateAndDateBefore(TransferState.WAITING,LocalDate.now());

        transfers.stream()
                .peek(transfer -> transfer.setRealizationState(TransferState.IN_PROGRESS))
                .forEach((transferRepository::save));

        try(FtpConnection ftpConnection = new FtpConnection(server, port, user, password)) {
            TransferToCSV.generateCSV(transferOutcoming, transfers);
            File file = new File(outcomingFolders+transferOutcoming);
            ftpConnection.uploadFile(file,transferRemote);
        }catch(CsvDataTypeMismatchException ex){
            System.out.println("------------ CSV data mismatch exception ------------");
            ex.printStackTrace();
        }catch(CsvRequiredFieldEmptyException ex){
            System.out.println("------------ CSV field empty exception ------------");
            ex.printStackTrace();
        }catch(IOException ex){
            System.out.println("------------ IO exception ------------");
            ex.printStackTrace();
        }
    }

    @Scheduled(cron = "${onbank.incoming.transfer.date}")
    public void incomingTransferMorningSession() {
        System.out.println("Session incoming");

        String transferIncoming = "/transferIncoming.csv";
        String incomingFolders = "csv/incoming";

        List<Transfer> transferCSV;
        try(FtpConnection ftpConnection = new FtpConnection(server, port, user, password)){
            if(!Paths.get(incomingFolders).toFile().exists()) {
                new File("csv").mkdir();
                new File("csv/incoming/").mkdir();
            }

            ftpConnection.downloadFile(transferRemote, incomingFolders + transferIncoming);
            transferCSV = CSVToTransfer.generateTransfers(incomingFolders + transferIncoming);

            transferCSV.stream()
                    .peek(transfer -> transfer.setRealizationState(TransferState.REALIZED))
                    .forEach((transferRepository::save));

        }catch(IOException ex){
            System.out.println("------------ IO exception ------------");
            ex.printStackTrace();
        }

    }
}
