package com.onbank.api.controller;

import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.google.gson.*;
import com.onbank.LoadProperties;
import com.onbank.api.dto.CreateTransferDto;
import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.OperationType;
import com.onbank.api.model.Transfer;
import com.onbank.api.repository.TransferRepository;
import com.onbank.api.transformer.TransferTransformer;
import jdk.nashorn.internal.parser.JSONParser;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.lang.reflect.Type;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@LoadProperties
@SpringBootTest
class TransferControllerTest {

    private MockMvc mockMvc;

    @Autowired
    WebApplicationContext webApplicationContext;

    @Autowired
    TransferController transferController;

    @Autowired
    TransferRepository transferRepository;

    @BeforeEach
    void setup(){
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    void getStatusCheck() throws Exception {
       String transfer = mockMvc.perform(get("/api/transfers"))
                            .andDo(print())
                            .andExpect(status().isOk())
                            .andReturn().getResponse().getContentAsString();

        assertThat(transfer).isNotEmpty();
    }

    @Test
    void shouldAddTransferToDb() throws Exception{
        CreateTransferDto createTransferDto = new CreateTransferDto();
        createTransferDto.setName("Jan");
        createTransferDto.setSurname("Kowalski");
        createTransferDto.setDate(LocalDateTime.of(2015, 05, 22, 18, 30, 13));
        createTransferDto.setAccountNumber("PL22711020040000300201355387");
        createTransferDto.setAmmount(new BigDecimal("1500.53"));
        createTransferDto.setDescription("Testowy przelew ĄŹŻ");
        createTransferDto.setOperationType(OperationType.CURRENCY_OPERATION);

        ObjectMapper mapper = new ObjectMapper();
        JavaTimeModule javaTimeModule=new JavaTimeModule();
        javaTimeModule.addDeserializer(LocalDateTime.class, new LocalDateTimeDeserializer(DateTimeFormatter.ISO_DATE_TIME));
        mapper.registerModule(javaTimeModule);
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson=ow.writeValueAsString(createTransferDto);

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
}
