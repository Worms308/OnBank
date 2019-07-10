package com.onbank.schedulers;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TransferSessions {

    @Scheduled(cron = "0 30 8 * * ?")
    public void outgoingTransferMorningSession() {
        System.out.println("Hello darkness my old friend- outgoing morning");
    }

    @Scheduled(cron = "0 0 10 * * ?")
    public void incomingTransferMorningSession() {
        System.out.println("Hello darkness my old friend - incoming morning");
    }

    @Scheduled(cron = "0 30 14 * * ?")
    public void outgoingTransferDailySession() {
        System.out.println("Hello darkness my old friend - outgoing daily");
    }

    @Scheduled(cron = "0 0 16 * * ?")
    public void incomingTransferDailySession() {
        System.out.println("Hello darkness my old friend - incoming daily");
    }

}
