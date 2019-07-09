package com.onbank.api.service.implementation;

import com.onbank.api.model.Transfer;
import com.onbank.api.repository.TransferRepository;
import com.onbank.api.service.TransferService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TransferServiceImpl implements TransferService {

    private final TransferRepository transferRepository;

    @Override
    public List<Transfer> getTransfers(){
        return transferRepository.findAll();
    }

    @Override
    public Transfer setTransfer(Transfer transfer){
        return transferRepository.save(transfer);
    }

}
