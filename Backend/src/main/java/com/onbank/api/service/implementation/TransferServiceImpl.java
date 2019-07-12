package com.onbank.api.service.implementation;

import com.onbank.api.model.Transfer;
import com.onbank.api.repository.TransferRepository;
import com.onbank.api.service.TransferService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TransferServiceImpl implements TransferService {

    private final TransferRepository transferRepository;

    @Override
    public List<Transfer> getTransfers(){
        return transferRepository.findAll();
    }

    @Override
    public Transfer createTransfer(Transfer transfer) {
        return transferRepository.save(transfer);
    }

}
