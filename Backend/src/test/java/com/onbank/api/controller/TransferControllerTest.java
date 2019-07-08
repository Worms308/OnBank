package com.onbank.api.controller;

import com.onbank.api.service.TransferService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class TransferControllerTest {

    @Mock
    private TransferController transferController;

    @Mock
    private TransferService transferService;

    @Test
    void getTransfersOkTest(){

    }
}
