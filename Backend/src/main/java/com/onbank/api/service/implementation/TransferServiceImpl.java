package com.onbank.api.service.implementation;

import com.onbank.api.model.Transfer;
import com.onbank.api.model.User;
import com.onbank.api.repository.TransferRepository;
import com.onbank.api.service.TransferService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) auth.getPrincipal();
        transfer.setSenderName(user.getName());

        return transferRepository.save(transfer);
    }

}
