package com.onbank.api.controller;
/*
import com.onbank.AppConfig;
import com.onbank.LoadProperties;
import com.onbank.api.dto.TransferDto;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.cache.annotation.EnableCaching;
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
@EnableCaching
@SpringBootTest
@SpringJUnitWebConfig(classes = {AppConfig.class})
class TransferControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;

    @MockBean
    private TransferController transferController;

    @MockBean
    private TransferDto transferDto;

    @Before
    public void setup(){
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    void getTransfersOkTest() {
        assertThat(transferController).isNotNull();
    }

    @Test
    void getTransferTest() throws Exception {
        this.mockMvc.perform(get("/api/transfers")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void getTransferOkTest() throws Exception {

    }
}*/
