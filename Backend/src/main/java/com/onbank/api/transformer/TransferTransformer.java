package com.onbank.api.transformer;

import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.Transfer;
import org.springframework.beans.BeanUtils;

public class TransferTransformer {

    public TransferDto convertToDto(Transfer transfer){
        TransferDto transferDto = new TransferDto();
        BeanUtils.copyProperties(transfer, transferDto);
        return transferDto;
    }

    public Transfer convertToEntity(TransferDto transferDto){
        Transfer transfer = new Transfer();
        BeanUtils.copyProperties(transferDto, transfer);
        return transfer;
    }
}
