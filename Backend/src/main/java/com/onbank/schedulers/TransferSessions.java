package com.onbank.schedulers;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TransferSessions {


    @Scheduled(cron = "${onbank.outgoing.transfer.morning.date}")
    public void outgoingTransferMorningSession() {
        System.out.println("Hello darkness my old friend- outgoing morning");
    }

    @Scheduled(cron = "${onbank.incoming.transfer.morning.date}")
    public void incomingTransferMorningSession() {
        System.out.println("Hello darkness my old friend - incoming morning");
    }

    @Scheduled(cron = "${onbank.outgoing.transfer.daily.date}")
    public void outgoingTransferDailySession() {
        System.out.println("Hello darkness my old friend - outgoing daily");
    }

    @Scheduled(cron = "${onbank.incoming.transfer.daily.date}")
    public void incomingTransferDailySession() {
        System.out.println("Hello darkness my old friend - incoming daily");
    }

}
