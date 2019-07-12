package com.onbank.api.controller;

import com.onbank.LoadProperties;
import com.onbank.api.model.OperationType;
import com.onbank.api.model.Transfer;
import com.onbank.api.repository.TransferRepository;
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

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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
    void setup(){
        transferRepository.deleteAll();
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }


    @Test
    void shouldReturnNoTransfers() throws Exception {

        mockMvc.perform(get("/api/transfers"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(0)));
    }

    private Transfer createMockObject(){
        BigDecimal bigDecimal = new BigDecimal(32324.3);
        Transfer transfer = new Transfer();
        transfer.setOperationType(OperationType.CREDIT_OPERATION);
        transfer.setAccountBallance(bigDecimal);
        transfer.setAccountNumber("GB47593749203719738493829384");
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
}
