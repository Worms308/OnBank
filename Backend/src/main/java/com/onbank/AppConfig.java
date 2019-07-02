package com.onbank;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@PropertySource("classpath:application.properties")
@EnableWebMvc
@Configuration
public class AppConfig {
}
