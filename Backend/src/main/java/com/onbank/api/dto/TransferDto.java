package com.onbank.api.dto;

import com.onbank.api.model.enumTypeofOperation;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;


@Data
public class TransferDto {
    private Long id;
    private LocalDateTime date;
    private String name;
    private String surname;
    private String accountNumber;
    private String description;
    private enumTypeofOperation typeOfOperation;
    private BigDecimal ammount;
    private BigDecimal accountBallance;

}
