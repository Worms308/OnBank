package com.onbank.api.controller;

import com.onbank.api.model.Transfer;
import com.onbank.api.service.TransferService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/transfers")
public class TransferController {

    private TransferService transferService;

    public TransferController(TransferService transferService){
        this.transferService = transferService;
    }

    @GetMapping()
    public List<Transfer> getTransfers(){
        return transferService.getTransfers();
    }

    @GetMapping("/{Id}")
    public Transfer getTransferById(@PathVariable Long Id){
        return transferService.getTransferById(Id);
    }

    @PostMapping()
    public Transfer setTransfer(@RequestBody Transfer transfer){
        return transferService.setTransfer(transfer);
    }

}
