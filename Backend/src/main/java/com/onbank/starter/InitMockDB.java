package com.onbank.starter;

import com.onbank.api.model.Transfer;
import com.onbank.api.model.enums.OperationType;
import com.onbank.api.model.enums.TransferState;
import com.onbank.api.repository.TransferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.time.LocalDate;

@Component
public class InitMockDB {
    @Autowired
    private TransferRepository transferRepository;

    @PostConstruct
    public void init(){
        this.initTransfers();
        this.initUsers();
    }

    private void initUsers(){
        //TODO dodać użytkowników
    }

    private void initTransfers(){
        transferRepository.save(new Transfer(
                LocalDate.of(2019, 03, 23),
                "Mariusz Kowalski",
                "PL61306662783096158101751159",
                "Przykładowy przelew z utf-8.",
                OperationType.NORMAL,
                new BigDecimal("150.0"),
                new BigDecimal("2400.0"),
                TransferState.REALIZED,
                "Łukasz Nowak",
                "PL57665182618431955785589025"
        ));

        transferRepository.save(new Transfer(
                LocalDate.of(2019, 05, 11),
                "Mariusz Kowalski",
                "PL61306662783096158101751159",
                "Przelew za zakupy.",
                OperationType.NORMAL,
                new BigDecimal("150.0"),
                new BigDecimal("2250.0"),
                TransferState.REALIZED,
                "Łukasz Nowak",
                "PL57665182618431955785589025"
        ));

        transferRepository.save(new Transfer(
                LocalDate.of(2019, 07, 29),
                "Łukasz Nowak",
                "PL57665182618431955785589025",
                "Sprzedaż oprogramowania.",
                OperationType.NORMAL,
                new BigDecimal("1150.0"),
                new BigDecimal("3000.0"),
                TransferState.REALIZED,
                "Mariusz Kowalski",
                "PL61306662783096158101751159"
        ));

        transferRepository.save(new Transfer(
                LocalDate.of(2018, 12, 24),
                "Mariusz Kowalski",
                "PL61306662783096158101751159",
                "Prezent gwiazdkowy.",
                OperationType.NORMAL,
                new BigDecimal("150.0"),
                new BigDecimal("2000.0"),
                TransferState.REALIZED,
                "Łukasz Nowak",
                "PL57665182618431955785589025"
        ));

        transferRepository.save(new Transfer(
                LocalDate.of(2018, 2, 1),
                "Mariusz Kowalski",
                "PL61306662783096158101751159",
                "Przelew na piwo.",
                OperationType.NORMAL,
                new BigDecimal("15.0"),
                new BigDecimal("2000.0"),
                TransferState.REALIZED,
                "Łukasz Nowak",
                "PL57665182618431955785589025"
        ));

        transferRepository.save(new Transfer(
                LocalDate.of(2018, 6, 25),
                "Mariusz Kowalski",
                "PL61306662783096158101751159",
                "Prezent urodzinowy.",
                OperationType.NORMAL,
                new BigDecimal("15.0"),
                new BigDecimal("2000.0"),
                TransferState.REALIZED,
                "Łukasz Nowak",
                "PL57665182618431955785589025"
        ));

        transferRepository.save(new Transfer(
                LocalDate.of(2018, 11, 10),
                "Mariusz Kowalski",
                "PL61306662783096158101751159",
                "Kredyt na ogrzewanie",
                OperationType.NORMAL,
                new BigDecimal("1500.0"),
                new BigDecimal("3000.0"),
                TransferState.REALIZED,
                "Łukasz Nowak",
                "PL57665182618431955785589025"
        ));

        transferRepository.save(new Transfer(
                LocalDate.of(2019, 2, 28),
                "Mariusz Kowalski",
                "PL61306662783096158101751159",
                "Przelew bez okazji.",
                OperationType.NORMAL,
                new BigDecimal("150.0"),
                new BigDecimal("2000.0"),
                TransferState.WAITING,
                "Łukasz Nowak",
                "PL57665182618431955785589025"
        ));

        transferRepository.save(new Transfer(
                LocalDate.of(2019, 7, 8),
                "Mariusz Kowalski",
                "PL61306662783096158101751159",
                "Pieniądze dla studentów",
                OperationType.NORMAL,
                new BigDecimal("1.0"),
                new BigDecimal("20.0"),
                TransferState.WAITING,
                "Łukasz Nowak",
                "PL57665182618431955785589025"
        ));
    }
}
