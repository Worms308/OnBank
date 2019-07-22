package com.onbank.api.service.implementation;

import com.onbank.api.model.Transfer;
import com.onbank.api.repository.TransferRepository;
import com.onbank.api.service.TransferService;
import com.onbank.http.UserData;
import com.onbank.starter.InitMockDB;
import com.onbank.exceptions.TransferNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TransferServiceImpl implements TransferService {

    private final TransferRepository transferRepository;

    @Override
    public List<Transfer> getTransfers() {
        if (UserData.getUser().getId() == 1)
            return transferRepository.getTransfersBySenderAccountNumberOrRecipientAccountNumber(
                    InitMockDB.getACCOUNT_NUMBER_1(),
                    InitMockDB.getACCOUNT_NUMBER_1()
            );
        else
            return transferRepository.getTransfersBySenderAccountNumberOrRecipientAccountNumber(
                    InitMockDB.getACCOUNT_NUMBER_2(),
                    InitMockDB.getACCOUNT_NUMBER_2()
            );
    }

    @Override
    public Transfer createTransfer(Transfer transfer) {
        transfer.setSenderName(UserData.getUser().getName());
        return transferRepository.save(transfer);
    }

    @Override
    public Transfer getTransfer(Long id) {
        return transferRepository.findById(id).orElseThrow(
                () -> new TransferNotFoundException("Transfer id=" + id + " not found.")
        );
    }
}
