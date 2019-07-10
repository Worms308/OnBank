package com.onbank.api.controller;

import com.onbank.api.dto.TransferDto;
import com.onbank.api.dto.CreateTransferDto;
import com.onbank.api.model.Transfer;
import com.onbank.api.service.TransferService;
import com.onbank.api.transformer.TransferTransformer;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/transfers")
@Validated
public class TransferController {

    private final TransferService transferService;

    @GetMapping
    public List<TransferDto> getTransfers(){
        List<Transfer> transfer = transferService.getTransfers();
        return transfer.stream().map(TransferTransformer::convertToDto).collect(Collectors.toList());
    }

    @PostMapping
    public TransferDto setTransfer(@Valid @RequestBody CreateTransferDto transferDto){
        return TransferTransformer.convertToDto(
                transferService.createTransfer(TransferTransformer.convertToEntity(transferDto)));
    }
}

