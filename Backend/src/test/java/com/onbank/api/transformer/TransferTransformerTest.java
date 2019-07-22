package com.onbank.api.transformer;

import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.Transfer;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class TransferTransformerTest {

    @Test
    void convertToDtoSuccessTest(){
        Transfer transfer = new Transfer();
        transfer.setRecipientName("Abacki");
        TransferTransformer transferTransformer = new TransferTransformer();

        assertEquals(true, transfer.getRecipientName().equals(transferTransformer.convertToDto(transfer).getRecipientName()));
    }

    @Test
    void convertToEntitySuccessTest(){
        TransferDto transferDto = new TransferDto();
        transferDto.setRecipientName("Abacki");
        TransferTransformer transferTransformer = new TransferTransformer();

        assertEquals(true, transferDto.getRecipientName().equals(transferTransformer.convertToEntity(transferDto).getRecipientName()));
    }

}
