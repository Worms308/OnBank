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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Component
public class TransferSessions {

    @Autowired
    private FtpConnection ftpConnection;
    private final TransferRepository transferRepository;

    @Scheduled(cron = "${onbank.outgoing.transfer.date}")
    public void outgoingTransferMorningSession() {
        List<Transfer> transfers = new ArrayList<>();
        System.out.println("Session outgoing");

        for(Transfer i: transferRepository.findAll()){
            if(LocalDate.now().isAfter(i.getDate()) && (i.getRealizationState() == TransferState.WAITING)){
                transfers.add(i);
            }
        }

        try {
            TransferToCSV.generateCSV("transferOutcoming.csv", transfers);
            File file = new File("csv/outcoming/transferOutcoming.csv");
            ftpConnection.open();
            ftpConnection.uploadFile(file,"transferOutcoming.csv");
            ftpConnection.close();
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

        try {
            new File("csv").mkdir();
            new File("csv/incoming/").mkdir();
            File file = new File("csv/incoming/transferIncoming.csv");
            if(!file.exists())
                file.createNewFile();
            ftpConnection.open();
            ftpConnection.downloadFile("/transferIncoming.csv", "csv/incoming/transferIncoming.csv");
            ftpConnection.close();
            CSVToTransfer.generateTransfers("csv/incoming/transferIncoming.csv");
        }catch(IOException ex){
            System.out.println("------------ IO exception ------------");
            ex.printStackTrace();
        }
    }
}
