package com.onbank;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;

public class DtoConfig {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
