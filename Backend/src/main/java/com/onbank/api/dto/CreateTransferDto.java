package com.onbank.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.onbank.api.model.enums.OperationType;
import com.onbank.api.validators.AccountNumber;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class CreateTransferDto {
    @NotNull(message = "Date cannot be empty.")
    @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    @NotNull(message = "Recipient cannot be empty.")
    @Size(min = 1, max = 200, message = "Name must be between 1-200 characters.")
    private String recipientName;

    @NotNull(message = "Account number cannot be empty.")
    @Size(min = 26, max = 28, message = "Account number must be between 26-28 characters.")
    @Pattern(regexp = "(^[A-Z]{2}\\d{26}$)|(^\\d{26}$)",
            message = "Invalid account number.")
    @AccountNumber(message = "Invalid account number.")
    private String recipientAccountNumber;

    private String description;

    @NotNull(message = "Type of operation cannot be empty.")
    @Enumerated(EnumType.STRING)
    private OperationType OperationType;

    @NotNull(message = "Amount cannot be empty.")
    @Positive(message = "Amount must be bigger than 0,00.")
    private BigDecimal amount;



}
