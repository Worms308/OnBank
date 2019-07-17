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
import java.time.LocalDateTime;

@Data
public class TransferDetailsDto {
    @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createDate;
    private String recipientName;
    private String recipientAccountNumber;
    private String description;
    private OperationType OperationType;
    private BigDecimal amount;
    private BigDecimal accountBalance;
    private TransferState realizationState;
    private String senderName;
    private String senderAccountNumber;
}
