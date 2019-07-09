package com.onbank.api.controller;

import com.onbank.AppConfig;
import com.onbank.DatabaseConfig;
import com.onbank.LoadProperties;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.web.SpringJUnitWebConfig;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;


import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@LoadProperties
@SpringBootTest
@WebMvcTest(TransferController.class)
@SpringJUnitWebConfig(classes = {AppConfig.class, DatabaseConfig.class})
class TransferControllerTest {


    private MockMvc mockMvc;

    @Autowired
    WebApplicationContext webApplicationContext;

    @MockBean
    private TransferController transferController;

    @Before
    void setup(){
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    void getTransfersOk() {
        assertThat(transferController).isNotNull();
    }

    @Test
    void getEmptyResponse() {
        assertThat(this.transferController.getTransfers()).isEmpty();
    }

    @Test
    void getStatusCheck() throws Exception {
        this.mockMvc.perform(get("/api/transfers"))
                .andDo(print())
                .andExpect(status().isOk());
    }
}
