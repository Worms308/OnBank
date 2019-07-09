package com.onbank.api.dto;

import com.onbank.api.model.enumTypeofOperation;
import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Data
public class CreateTransferDto {
    @NotNull(message = "Date cannot be empty.")
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
    private enumTypeofOperation typeOfOperation;
    @NotNull(message = "Amount cannot be empty.")
    @Positive(message = "Amount must be bigger than 0,00.")
    private BigDecimal ammount;

}
