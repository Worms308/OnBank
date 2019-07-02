package com.onbank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@SpringBootApplication
public class OnbankApplication {

    public static void main(String[] args) {
        SpringApplication.run(OnbankApplication.class, args);
    }

}
