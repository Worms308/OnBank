package com.onbank.api.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity(name = "transfer")
public class Transfer {
    @Id
    @Column(name="Id", nullable=false, unique = true)
    private Long id;
    @Column(name="date", nullable=false)
    private Date date;
    @Column(name="name", nullable=false, length=50)
    private String name;
    @Column(name="surname", nullable=false, length=100)
    private String surname;
    @Column(name="accountnumber", nullable=false)
    @Size(min = 26, max = 28)
    private String accountNumber;
    @Column(name="description", nullable=false, length=4000)
    private String description;
    @Column(name="typeofoperation", nullable=false, length=200)
    private String typeOfOperation;
    @Column(name="ammount", nullable=false)
    private BigDecimal ammount;
    @Column(name="accountballance", nullable=false)
    private BigDecimal accountBallance;
}
