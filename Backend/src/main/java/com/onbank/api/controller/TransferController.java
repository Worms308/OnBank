package com.onbank.api.controller;

import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.Transfer;
import com.onbank.api.service.TransferService;
import com.onbank.api.transformer.TransferTransformer;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/transfers")
public class TransferController {

    private final TransferService transferService;

    @GetMapping
    public List<TransferDto> getTransfers(){
        List<Transfer> transfer = transferService.getTransfers();
        List<TransferDto> transferDto = transfer.stream().map(TransferTransformer::convertToDto).collect(Collectors.toList());

        return transferDto;
    }
}

