package com.onbank.api.service;

import com.onbank.api.model.Transfer;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface TransferService {

    List<Transfer> getTransfers();

    Transfer getTransferById(@PathVariable Long Id);

    Transfer setTransfer(@RequestBody Transfer transfer);
}
