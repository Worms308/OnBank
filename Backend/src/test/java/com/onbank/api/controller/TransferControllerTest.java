package com.onbank.api.controller;

import com.onbank.LoadProperties;
import com.onbank.ObjectToJson;
import com.onbank.api.dto.CreateTransferDto;
import com.onbank.api.model.enums.OperationType;
import com.onbank.api.model.Transfer;
import com.onbank.api.model.enums.TransferState;
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
import java.time.LocalDate;
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
        createTransferDto.setRecipientName("Jan Kowalski");
        createTransferDto.setDate(LocalDate.of(2015, 05, 22));
        createTransferDto.setRecipientAccountNumber("PL32349188939421535264612669");
        createTransferDto.setAmount(new BigDecimal("1500.53"));
        createTransferDto.setDescription("Testowy przelew ĄŹŻ");
        createTransferDto.setOperationType(OperationType.NORMAL);
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
        fromDB.get(0).setRealizationState(null);
        fromDB.get(0).setAccountBalance(null);
        fromDB.get(0).setSenderName(null);
        fromDB.get(0).setSenderAccountNumber(null);

        fromDB.get(0).setCreateDate(null);
        fromDB.get(0).setLastModified(null);

        assertThat(fromDB.get(0)).isEqualToComparingFieldByFieldRecursively(TransferTransformer.convertToEntity(createTransferDto));//isEqualTo();
    }

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
