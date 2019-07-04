package com.onbank.api.service.implementation;

import com.onbank.api.model.Transfer;
import com.onbank.api.repository.TransferRepository;
import com.onbank.api.service.TransferService;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class TransferServiceImpl implements TransferService {

    private TransferRepository transferRepository;

    public TransferServiceImpl(TransferRepository transferRepository){
        this.transferRepository = transferRepository;
    }

    public List<Transfer> getTransfers(){
        return transferRepository.findAll();
    }

    public Transfer getTransferById(Long Id){
        Optional<Transfer> status;
        status = transferRepository.findById(Id);
        if(status.isPresent())
            return status.get();
        return null;
    }

    public Transfer setTransfer( Transfer transfer){
        return transferRepository.save(transfer);
    }
}
