package com.onbank.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import com.onbank.api.model.OperationType;
import com.onbank.api.validators.AccountNumber;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class TransferDto {
    private Long id;

    @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime date;

    private String recipientName;

    private String recipientAccountNumber;

    private String description;

    @Enumerated(EnumType.STRING)
    private OperationType OperationType;

    private BigDecimal amount;

    private BigDecimal accountBalance;

    private String senderName;

    private String senderAccountNumber;

}
