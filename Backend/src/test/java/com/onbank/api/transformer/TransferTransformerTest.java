package com.onbank.api.transformer;

import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.Transfer;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class TransferTransformerTest {

    @Test
    void convertToDtoSuccessTest(){
        Transfer transfer = new Transfer();
        transfer.setSurname("Abacki");
        TransferTransformer transferTransformer = new TransferTransformer();

        assertEquals(true, transfer.getSurname().equals(transferTransformer.convertToDto(transfer).getSurname()));
    }

    @Test
    void convertToEntitySuccessTest(){
        TransferDto transferDto = new TransferDto();
        transferDto.setSurname("Abacki");
        TransferTransformer transferTransformer = new TransferTransformer();

        assertEquals(true, transferDto.getSurname().equals(transferTransformer.convertToEntity(transferDto).getSurname()));
    }

}
