package com.onbank.schedulers;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TransferSessions {


    @Scheduled(cron = "${onbank.outgoing.transfer.date}")
    public void outgoingTransferMorningSession() {
        System.out.println("Hello darkness my old friend- outgoing");
    }

    @Scheduled(cron = "${onbank.incoming.transfer.date}")
    public void incomingTransferMorningSession() {
        System.out.println("Hello darkness my old friend - incoming");
    }
}
