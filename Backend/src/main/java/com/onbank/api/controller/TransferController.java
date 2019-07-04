package com.onbank.api.controller;

import com.onbank.api.model.Transfer;
import com.onbank.api.repository.TransferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/transfers")
public class TransferController {

    private TransferRepository transferRepository;

    @Autowired
    public TransferController(TransferRepository transferRepository){
        this.transferRepository = transferRepository;
    }

    @GetMapping()
    public List<Transfer> getTransfers(){
        return transferRepository.findAll();
    }

    @GetMapping("/{Id}")
    public Transfer getTransferById(@PathVariable Long Id){
        Optional<Transfer> status;
        status = transferRepository.findById(Id);
        if(status.isPresent())
            return status.get();
        return null;
    }

    @PostMapping()
    public Transfer setTransfer(@RequestBody Transfer transfer){
        return transferRepository.save(transfer);
    }

}
