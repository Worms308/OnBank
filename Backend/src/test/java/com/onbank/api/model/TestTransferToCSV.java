package com.onbank.api.model;

import com.onbank.LoadProperties;
import com.onbank.api.model.csv.TransferToCSV;
import com.opencsv.exceptions.CsvDataTypeMismatchException;
import com.opencsv.exceptions.CsvRequiredFieldEmptyException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@LoadProperties
@SpringBootTest
public class TestTransferToCSV {

    private Transfer createMockObject() {
        BigDecimal bigDecimal = new BigDecimal(32324.3);
        Transfer transfer = new Transfer();
        transfer.setOperationType(OperationType.INSTANT);
        transfer.setAccountBalance(bigDecimal);
        transfer.setRecipientAccountNumber("PL32349188939421535264612669");
        transfer.setSenderAccountNumber("PL32349188939421535264612669");
        transfer.setAmount(bigDecimal);
        transfer.setDate(LocalDate.now());
        transfer.setDescription("Opis operacji");
        transfer.setRecipientName("Jan Kowalski");
        transfer.setSenderName("Jan Kowalski");
        transfer.setRealizationState(TransferState.WAITING);
        return transfer;
    }

    @Test
    public void shouldCreateCSV() throws CsvRequiredFieldEmptyException, IOException, CsvDataTypeMismatchException {
        List<Transfer> transfers = new ArrayList<>();
        transfers.add(createMockObject());
        transfers.add(createMockObject());
        transfers.add(createMockObject());

        TransferToCSV.generateCSV("plik.csv", transfers);
        File csv = new File("csv/outcoming/plik.csv");

        assertThat(csv.exists()).isTrue();
        csv.delete();
    }
}
