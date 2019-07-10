package com.onbank.api.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.onbank.LoadProperties;
import com.onbank.ObjectToJson;
import com.onbank.api.dto.CreateTransferDto;
import com.onbank.api.model.OperationType;
import com.onbank.api.model.Transfer;
import com.onbank.api.repository.TransferRepository;
import com.onbank.api.transformer.TransferTransformer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
class TransferControllerTest {

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private TransferRepository transferRepository;

    @BeforeEach
    void setup() {
        transferRepository.deleteAll();
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    private CreateTransferDto createTransferDto(){
        CreateTransferDto createTransferDto = new CreateTransferDto();
        createTransferDto.setName("Jan");
        createTransferDto.setSurname("Kowalski");
        createTransferDto.setDate(LocalDateTime.of(2015, 05, 22, 18, 30, 13));
        createTransferDto.setAccountNumber("PL32349188939421535264612669");
        createTransferDto.setAmmount(new BigDecimal("1500.53"));
        createTransferDto.setDescription("Testowy przelew ĄŹŻ");
        createTransferDto.setOperationType(OperationType.CURRENCY_OPERATION);
        return createTransferDto;
    }

    @Test
    void shouldAddTransferToDb() throws Exception {
        CreateTransferDto createTransferDto = this.createTransferDto();
        String requestJson = ObjectToJson.convert(createTransferDto);

        this.mockMvc.perform(post("/api/transfers")
                .contentType(APPLICATION_JSON_UTF8)
                .content(requestJson))
                .andDo(print())
                .andExpect(status().isOk());

        List<Transfer> fromDB = transferRepository.findAll();
        assertThat(fromDB.size()).isEqualTo(1);

        fromDB.get(0).setId(null);

        assertThat(fromDB.get(0)).isEqualTo(TransferTransformer.convertToEntity(createTransferDto));
    }

    private Transfer createMockObject() {
        BigDecimal bigDecimal = new BigDecimal(32324.3);
        Transfer transfer = new Transfer();
        transfer.setOperationType(OperationType.CREDIT_OPERATION);
        transfer.setAccountBallance(bigDecimal);
        transfer.setAccountNumber("PL32349188939421535264612669");
        transfer.setAmmount(bigDecimal);
        transfer.setDate(LocalDateTime.now());
        transfer.setDescription("Opis operacji");
        transfer.setName("Jan");
        transfer.setSurname("Kowalski");
        return transfer;
    }

    @Test
    void shouldReturnTransfers() throws Exception {
        transferRepository.save(createMockObject());
        mockMvc.perform(get("/api/transfers"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)));
    }

    @Test
    void shouldReturnNoTransfers() throws Exception {

        mockMvc.perform(get("/api/transfers"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(0)));
    }
}
