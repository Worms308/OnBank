package com.onbank;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Primary
@PropertySource("file:${app.home}/application.properties")
@EnableWebMvc
@EnableJpaRepositories
@Configuration
public class AppConfig {

}
