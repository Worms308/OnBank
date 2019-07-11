package com.onbank.api.transformer;

import com.onbank.api.dto.CreateTransferDto;
import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.Transfer;
import org.springframework.beans.BeanUtils;

import java.math.BigDecimal;

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

    static public Transfer convertToEntity(CreateTransferDto transferDto){
        Transfer transfer = new Transfer();
        BeanUtils.copyProperties(transferDto, transfer);
        //TODO obliczanie stanu konta po przelewie
        transfer.setAccountBalance(new BigDecimal("0.00"));
        return transfer;
    }
}
