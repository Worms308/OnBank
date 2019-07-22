package com.onbank.api.model;

import com.onbank.LoadProperties;
import com.onbank.api.model.csv.CSVToTransfer;
import com.onbank.api.model.csv.TransferToCSV;
import com.onbank.api.model.enums.OperationType;
import com.onbank.api.model.enums.TransferState;
import com.opencsv.exceptions.CsvDataTypeMismatchException;
import com.opencsv.exceptions.CsvRequiredFieldEmptyException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
@LoadProperties
@SpringBootTest
public class TestTransferToCSV {

    private Transfer createMockObject() {
        BigDecimal bigDecimal = new BigDecimal("32324.3");
        Transfer transfer = new Transfer();
        transfer.setOperationType(OperationType.INSTANT);
        transfer.setAccountBalance(bigDecimal);
        transfer.setRecipientAccountNumber("PL32349188939421535264612669");
        transfer.setSenderAccountNumber("PL32349188939421535264612669");
        transfer.setAmount(bigDecimal);
        transfer.setDate(LocalDate.of(2019, 07, 15));
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
        transfers.clear();
        csv.delete();
    }

    @Test
    public void shouldParseCSV() throws IOException {
        List<Transfer> transfers = new ArrayList<>();
        transfers.add(createMockObject());
        transfers.add(createMockObject());
        transfers.add(createMockObject());

        File csv = new File("csv/outcoming/plik.csv");
        FileWriter writer = new FileWriter(csv);
        writer.append(
                "ACCOUNTBALANCE,\"amount\",\"date\",\"description\",\"id\",\"operationType\",\"realizationState\",\"recipientAccountNumber\",\"recipientName\",\"senderAccountNumber\",\"senderName\"\n" +
                "32324.3,\"32324.3\",\"2019-07-15\",\"Opis operacji\",\"\",\"INSTANT\",\"WAITING\",\"PL32349188939421535264612669\",\"Jan Kowalski\",\"PL32349188939421535264612669\",\"Jan Kowalski\"\n" +
                "32324.3,\"32324.3\",\"2019-07-15\",\"Opis operacji\",\"\",\"INSTANT\",\"WAITING\",\"PL32349188939421535264612669\",\"Jan Kowalski\",\"PL32349188939421535264612669\",\"Jan Kowalski\"\n" +
                "32324.3,\"32324.3\",\"2019-07-15\",\"Opis operacji\",\"\",\"INSTANT\",\"WAITING\",\"PL32349188939421535264612669\",\"Jan Kowalski\",\"PL32349188939421535264612669\",\"Jan Kowalski\"\n"
        );
        writer.close();

        assertThat(csv.exists()).isTrue();

        List<Transfer> transfersFromParser = CSVToTransfer.generateTransfers("csv/outcoming/plik.csv");
        assertThat(transfersFromParser.size()).isEqualTo(3);

        assertThat(transfers).isEqualTo(transfersFromParser);
    }

    @Test
    void shouldCreateAndThenParse() throws CsvRequiredFieldEmptyException, IOException, CsvDataTypeMismatchException {
        List<Transfer> transfers = new ArrayList<>();
        transfers.add(createMockObject());
        transfers.add(createMockObject());
        transfers.add(createMockObject());

        TransferToCSV.generateCSV("plik.csv", transfers);
        File csv = new File("csv/outcoming/plik.csv");
        List<Transfer> transfersFromParser = CSVToTransfer.generateTransfers("csv/outcoming/plik.csv");

        assertThat(transfersFromParser.size()).isEqualTo(3);
        assertThat(transfers).isEqualTo(transfersFromParser);

        csv.delete();
        assertThat(csv.exists()).isFalse();
    }
}
