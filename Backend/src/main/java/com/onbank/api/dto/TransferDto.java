package com.onbank.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import com.onbank.api.model.OperationType;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class TransferDto {
    private Long id;
    @NotNull(message = "Date cannot be empty.")
    @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime date;
    @NotNull(message = "Name cannot be empty.")
    @Size(min = 1, max = 50, message = "Name must be between 1-50 characters.")
    private String name;
    @NotNull(message = "Surname cannot be empty.")
    @Size(min = 1, max = 100, message = "Surname must be between 1-100 characters.")
    private String surname;
    @NotNull(message = "Account number cannot be empty.")
    @Size(min = 26, max = 28, message = "Account number must be between 26-28 characters.")
    @Pattern(regexp = "PL\\d{26}|\\d{26}",
            message = "Invalid account number.")
    private String accountNumber;
    private String description;
    @NotNull(message = "Type of operation cannot be empty.")
    @Enumerated(EnumType.STRING)
    private OperationType OperationType;
    @NotNull(message = "Amount cannot be empty.")
    @Positive(message = "Amount must be bigger than 0,00.")
    private BigDecimal ammount;
    private BigDecimal accountBallance;

}
