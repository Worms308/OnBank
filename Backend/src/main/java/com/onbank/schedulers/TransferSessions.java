package com.onbank.schedulers;

import com.onbank.ftp.FtpConnection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class TransferSessions {

    @Autowired
    FtpConnection ftpConnection;


    @Scheduled(cron = "${onbank.outgoing.transfer.date}")
    public void outgoingTransferMorningSession() {
        System.out.println("Session outgoing");
        try {
            ftpConnection.open();
            ftpConnection.close();
        }catch(IOException ex){
            ex.printStackTrace();
        }
    }

    @Scheduled(cron = "${onbank.incoming.transfer.date}")
    public void incomingTransferMorningSession() {
        System.out.println("Session incoming");
        try {
            ftpConnection.open();
            ftpConnection.close();
        }catch(IOException ex){
            ex.printStackTrace();
        }
    }
}
