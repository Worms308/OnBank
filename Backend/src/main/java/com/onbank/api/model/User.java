package com.onbank.api.model;

import com.onbank.api.model.enums.Nationality;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "user")
@EqualsAndHashCode(callSuper = true)
public class User extends EntityCore {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "pesel", nullable = false, unique = true)
    private String pesel;

    @Column(name = "nationality", nullable = false)
    private Nationality nationality;

    @Column(name = "birthplace", nullable = false)
    private String birthPlace;

    @Column(name = "birthdate", nullable = false)
    private LocalDate birthDate;

    @Column(name = "mothermaidenname", nullable = false)
    private String motherMaidenName; // NAZWISKO RODOWE MATKI

    @Column(name = "idNumber", nullable = false)
    private String idNumber; // NUMER DOWODU OSOBISTEGO

//    private List<Transfer> transfers;
}
