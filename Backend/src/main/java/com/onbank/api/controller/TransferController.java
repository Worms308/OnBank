package com.onbank.api.controller;

import com.onbank.api.dto.TransferDto;
import com.onbank.api.model.Transfer;
import com.onbank.api.service.TransferService;
import com.onbank.api.transformer.TransferTransformer;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/transfers")
public class TransferController {

    private TransferService transferService;
    private TransferTransformer transferTransformer = new TransferTransformer();

    public TransferController(TransferService transferService){
        this.transferService = transferService;
    }

    @GetMapping()
    public List<TransferDto> getTransfers(){
        List<Transfer> transfersList = transferService.getTransfers();
        List<TransferDto> transferDtoList = new ArrayList<>();

        for(Transfer i: transfersList){
            transferDtoList.add(transferTransformer.convertToDto(i));
        }

        return transferDtoList;
    }

    @GetMapping("/{Id}")
    public TransferDto getTransferById(@PathVariable Long Id){ return transferTransformer.convertToDto(transferService.getTransferById(Id)); }

    @PostMapping()
    public Transfer setTransfer(@RequestBody TransferDto transferDto){
        return transferTransformer.convertToEntity(
                transferTransformer.convertToDto(transferService.setTransfer(
                transferTransformer.convertToEntity(transferDto)))); }
}

