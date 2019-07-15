package com.onbank.api.model;

import com.onbank.api.model.enums.OperationType;
import com.onbank.api.model.enums.TransferState;
import com.onbank.api.validators.AccountNumber;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "transfer")
@EqualsAndHashCode(callSuper = false)
public class Transfer extends EntityCore{

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "recipientname", nullable = false, length = 200)
    private String recipientName;

    @Column(name = "recipientaccountnumber", nullable = false)
    @Size(min = 26, max = 28, message = "Account number must be between 26-28 characters.")
    @NotNull(message = "Account number cannot be empty.")
    @Pattern(regexp = "(^[A-Z]{2}\\d{26}$)|(^\\d{26}$)")
    @AccountNumber(message = "Invalid account number.")
    private String recipientAccountNumber;

    @Column(name = "description", length = 4000)
    private String description;

    @NotNull(message = "Type of operation cannot be empty.")
    @Column(name = "typeofoperation", nullable = false, length = 200)
    @Enumerated(EnumType.STRING)
    private OperationType operationType;

    @Column(name = "amount", nullable = false)
    @NotNull(message = "Amount cannot be empty.")
    @Positive(message = "Amount must be bigger than 0,00.")
    private BigDecimal amount;

    @Column(name = "accountbalance", nullable = false)
    private BigDecimal accountBalance;

    @Column(name = "realizationstate", nullable = false)
    @NotNull(message = "Transfer state cannot be empty.")
    @Enumerated(EnumType.STRING)
    private TransferState realizationState;

    @Column(name = "sendername", length = 200)
    @NotNull(message = "Sender name cannot be empty.")
    private String senderName;

    @Column(name = "senderaccountnumber", nullable = false)
    @Size(min = 26, max = 28, message = "Account number must be between 26-28 characters.")
    @NotNull(message = "Account number cannot be empty.")
    @Pattern(regexp = "(^[A-Z]{2}\\d{26}$)|(^\\d{26}$)")
    @AccountNumber(message = "Invalid account number.")
    private String senderAccountNumber;

}