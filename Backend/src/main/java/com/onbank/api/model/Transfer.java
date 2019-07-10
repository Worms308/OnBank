package com.onbank.api.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import javax.validation.constraints.Pattern;

@Data
@Entity
@Table(name = "transfer")
public class Transfer {
    @Id
    @Column(name="Id", nullable=false, unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="date", nullable=false)
    @NotNull(message = "Date cannot be empty.")
    private LocalDateTime date;
    @Column(name="name", nullable=false, length=50)
    @NotNull(message = "Name cannot be empty.")
    private String name;
    @Column(name="surname", nullable=false, length=100)
    @NotNull(message = "Surname cannot be empty.")
    private String surname;
    @Column(name="accountnumber", nullable=false)
    @Size(min = 26, max = 28, message = "Account number must be between 26-28 characters.")
    @NotNull(message = "Account number cannot be empty.")
    @Pattern(regexp = "PL\\d{26}|\\d{26}")
    private String accountNumber;
    @Column(name="description", length=4000)
    private String description;
    @NotNull(message = "Type of operation cannot be empty.")
    @Column(name="typeofoperation", nullable=false, length=200)
    @Enumerated(EnumType.STRING)
    private OperationType OperationType;
    @Column(name="ammount", nullable=false)
    @NotNull(message = "Amount cannot be empty.")
    @Positive(message = "Amount must be bigger than 0,00.")
    private BigDecimal ammount;
    @Column(name="accountballance", nullable=false)
    private BigDecimal accountBallance;
}