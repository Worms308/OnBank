package com.onbank.api.controller;

import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.Transfer;
import com.onbank.api.service.TransferService;
import com.onbank.api.transformer.TransferTransformer;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/api/transfers")
public class TransferController {

    private TransferService transferService;
    private TransferTransformer transferTransformer = new TransferTransformer();

    public TransferController(TransferService transferService){
        this.transferService = transferService;
    }

    @GetMapping
    public List<TransferDto> getTransfers(){
        List<Transfer> transfer = transferService.getTransfers();
        List<TransferDto> transferDto = transfer.stream().map(transferTransformer::convertToDto).collect(Collectors.toList());

        return transferDto;
    }
}

