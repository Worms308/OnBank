package com.onbank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;


@SpringBootApplication
@EnableScheduling
public class OnBankApplication {

    public static void main(String[] args) {
        SpringApplication.run(OnBankApplication.class, args);
    }

}
