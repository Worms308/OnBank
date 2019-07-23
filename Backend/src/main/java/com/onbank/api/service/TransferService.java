package com.onbank.api.service;

import com.onbank.api.model.Transfer;

import java.util.List;

public interface TransferService {

    List<Transfer> getTransfers();
    List<Transfer> getLockedTransactions();
    Transfer createTransfer(Transfer transfer);
    Transfer getTransfer(Long id);
}
