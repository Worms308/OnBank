package com.onbank.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.onbank.api.model.enums.OperationType;
import com.onbank.api.model.enums.TransferState;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class TransferDto {
    private Long id;

    @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    private String recipientName;

    private String recipientAccountNumber;

    private String description;

    @Enumerated(EnumType.STRING)
    private OperationType OperationType;

    private BigDecimal amount;

    private BigDecimal accountBalance;

    private TransferState realizationState;

    private String senderName;

    private String senderAccountNumber;

}
