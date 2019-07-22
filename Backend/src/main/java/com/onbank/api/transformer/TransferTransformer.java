package com.onbank.api.transformer;

import com.onbank.api.dto.CreateTransferDto;
import com.onbank.api.dto.TransferDetailsDto;
import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.Transfer;
import org.springframework.beans.BeanUtils;

public class TransferTransformer {

    public static TransferDto convertToDto(Transfer transfer) {
        TransferDto transferDto = new TransferDto();
        BeanUtils.copyProperties(transfer, transferDto);
        return transferDto;
    }

    public static Transfer convertToEntity(TransferDto transferDto) {
        Transfer transfer = new Transfer();
        BeanUtils.copyProperties(transferDto, transfer);
        return transfer;
    }

    public static Transfer convertToEntity(CreateTransferDto transferDto) {
        Transfer transfer = new Transfer();
        BeanUtils.copyProperties(transferDto, transfer);
        return transfer;
    }

    public static TransferDetailsDto convertToTransferDetailsDto(Transfer transfer){
        TransferDetailsDto detailsDto = new TransferDetailsDto();
        BeanUtils.copyProperties(transfer, detailsDto);
        return detailsDto;
    }
}
