package com.onbank.api.transformer;

import com.onbank.api.dto.TransferDto;
import com.onbank.api.dto.CreateTransferDto;
import com.onbank.api.model.Transfer;
import org.springframework.beans.BeanUtils;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;

public class TransferTransformer {

    public static TransferDto convertToDto(Transfer transfer){
        TransferDto transferDto = new TransferDto();
        BeanUtils.copyProperties(transfer, transferDto);
        return transferDto;
    }

    public static Transfer convertToEntity(TransferDto transferDto){
        Transfer transfer = new Transfer();
        BeanUtils.copyProperties(transferDto, transfer);
        return transfer;
    }

    public static Transfer convertToEntity(CreateTransferDto createTransferDto){
        Transfer transfer = new Transfer();
        BeanUtils.copyProperties(createTransferDto, transfer);
        //TODO obsługa pola "accountBallance" - dodać jego obliczanie
        transfer.setAccountBallance(new BigDecimal(500.0));
        return transfer;
    }
}
