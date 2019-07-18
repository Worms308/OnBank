package com.onbank.schedulers;

import com.onbank.api.model.Transfer;
import com.onbank.api.model.TransferState;
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
import java.util.stream.Collectors;

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

    private final TransferRepository transferRepository;

    @Scheduled(cron = "${onbank.outgoing.transfer.date}")
    public void outgoingTransferMorningSession() {
        System.out.println("Session outgoing");

        String transferOutcoming = "transferOutcoming.csv";
        String outcomingFolders = "csv/outcoming/";

        List<Transfer> transfers = transferRepository.findByRealizationStateAndDateAfter(TransferState.WAITING,LocalDate.now())
                .stream()
                .collect(Collectors.toList());

        try(FtpConnection ftpConnection = new FtpConnection(server, port, user, password)) {
            TransferToCSV.generateCSV(transferOutcoming, transfers);
            File file = new File(outcomingFolders+transferOutcoming);
            ftpConnection.uploadFile(file,transferOutcoming);
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
                return;
            }

            ftpConnection.downloadFile(transferIncoming, incomingFolders + transferIncoming);
            transferCSV = CSVToTransfer.generateTransfers(incomingFolders + transferIncoming);
            transferCSV.forEach((transferRepository::save));

        }catch(IOException ex){
            System.out.println("------------ IO exception ------------");
            ex.printStackTrace();
        }

    }
}
