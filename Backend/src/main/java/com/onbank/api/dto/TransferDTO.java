package com.onbank.api.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class TransferDTO {
    private Long id;
    private Date date;
    private String name;
    private String surname;
    private String accountNumber;
    private String description;
    private String typeOfOperation;
    private BigDecimal ammount;
    private BigDecimal accountBallance;
}
