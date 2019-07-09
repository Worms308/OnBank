package com.onbank.api.model;

import lombok.Data;

import javax.persistence.*;
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
    private LocalDateTime date;
    @Column(name="name", nullable=false, length=50)
    private String name;
    @Column(name="surname", nullable=false, length=100)
    private String surname;
    @Column(name="accountnumber", nullable=false)
    @Size(min = 26, max = 28)
    @Pattern(regexp = "PL\\d{2}[ ]\\d{4}[ ]\\d{4}[ ]\\d{4}[ ]\\d{4}[ ]\\d{4}[ ]\\d{4}|PL\\d{26}")
    private String accountNumber;
    @Column(name="description", nullable=false, length=4000)
    private String description;
    @Column(name="typeofoperation", nullable=false, length=200)
    private enumTypeofOperation typeOfOperation;
    @Column(name="ammount", nullable=false)
    private BigDecimal ammount;
    @Column(name="accountballance", nullable=false)
    private BigDecimal accountBallance;
}