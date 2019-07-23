package com.onbank.api.controller;

import com.onbank.Mocks;
import com.onbank.api.dto.CreateTransferDto;
import com.onbank.api.dto.TransferDetailsDto;
import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.Transfer;
import com.onbank.api.model.enums.TransferState;
import com.onbank.api.service.TransferService;
import com.onbank.api.transformer.TransferTransformer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigDecimal;
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
    @ResponseStatus(HttpStatus.OK)
    public List<TransferDto> getTransfers() {
        List<Transfer> transfer = transferService.getTransfers();
        return transfer.stream().map(TransferTransformer::convertToDto).collect(Collectors.toList());
    }

    @GetMapping("/getLockedTransactions")
    @ResponseStatus(HttpStatus.OK)
    public List<TransferDto> getLockedTransactions() {
        List<Transfer> transfer = transferService.getLockedTransactions();
        return transfer.stream().map(TransferTransformer::convertToDto).collect(Collectors.toList());
    }


    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void createTransfer(@Valid @RequestBody CreateTransferDto transferDto) {
        Transfer tmpTransfer = TransferTransformer.convertToEntity(transferDto);

        tmpTransfer.setAccountBalance(new BigDecimal("0.00"));
        tmpTransfer.setSenderAccountNumber(Mocks.getMockUser().getAccountNumber());
        tmpTransfer.setRealizationState(TransferState.WAITING);
        transferService.createTransfer(tmpTransfer);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public TransferDetailsDto getTransfer(@PathVariable Long id){
        return TransferTransformer.convertToTransferDetailsDto(transferService.getTransfer(id));
    }
}

