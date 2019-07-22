package com.onbank.api.model;

import com.onbank.api.model.enums.Nationality;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
@EqualsAndHashCode(callSuper = false)
public class User extends EntityCore {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "phone")
    @Size(min = 9, max = 11, message = "Phone number must be between 9-11 numbers.")
    private String phone;

    @Column(name = "email", nullable = false)
    @Email
    private String email;

    @Column(name = "pesel", nullable = false, unique = true)
    @Size(min = 11, max = 11)
    private String pesel;

    @Column(name = "nationality", nullable = false)
    private Nationality nationality;

    @Column(name = "birthplace", nullable = false)
    private String birthPlace;

    @Column(name = "birthdate", nullable = false)
    @Past
    private LocalDate birthDate;

    @Column(name = "mothermaidenname", nullable = false)
    private String motherMaidenName; // NAZWISKO RODOWE MATKI

    @Column(name = "idNumber", nullable = false)
    private String idNumber; // NUMER DOWODU OSOBISTEGO

    @OneToMany
    private List<Transfer> transfers;
}
