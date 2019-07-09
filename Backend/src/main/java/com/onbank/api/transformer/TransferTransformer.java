package com.onbank.api.transformer;

import com.onbank.api.dto.CreateTransferDto;
import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.Transfer;
import org.springframework.beans.BeanUtils;

import java.math.BigDecimal;

public class TransferTransformer {

    static public TransferDto convertToDto(Transfer transfer){
        TransferDto transferDto = new TransferDto();
        BeanUtils.copyProperties(transfer, transferDto);
        return transferDto;
    }

    static public Transfer convertToEntity(TransferDto transferDto){
        Transfer transfer = new Transfer();
        BeanUtils.copyProperties(transferDto, transfer);
        return transfer;
    }

    static public Transfer convertToEntity(CreateTransferDto transferDto){
        Transfer transfer = new Transfer();
        BeanUtils.copyProperties(transferDto, transfer);
        //TODO obliczanie stanu konta po przelewie
        transfer.setAccountBallance(new BigDecimal(0.0));
        return transfer;
    }
}
