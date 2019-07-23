package com.onbank.api.service.implementation;

import com.onbank.api.model.Transfer;
import com.onbank.api.model.enums.TransferState;
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
            return transferRepository.getTransfersBySenderAccountNumberOrRecipientAccountNumberAndRealizationState(
                    InitMockDB.getACCOUNT_NUMBER_1(),
                    InitMockDB.getACCOUNT_NUMBER_1(),
                    TransferState.REALIZED
            );
        else
            return transferRepository.getTransfersBySenderAccountNumberOrRecipientAccountNumberAndRealizationState(
                    InitMockDB.getACCOUNT_NUMBER_2(),
                    InitMockDB.getACCOUNT_NUMBER_2(),
                    TransferState.REALIZED
            );
    }

    @Override
    public List<Transfer> getLockedTransactions() {
        if (UserData.getUser().getId() == 1)
            return transferRepository.getTransfersBySenderAccountNumberOrRecipientAccountNumberAndRealizationStateOrRealizationState(
                    InitMockDB.getACCOUNT_NUMBER_1(),
                    InitMockDB.getACCOUNT_NUMBER_1(),
                    TransferState.WAITING,
                    TransferState.IN_PROGRESS
            );
        else
            return transferRepository.getTransfersBySenderAccountNumberOrRecipientAccountNumberAndRealizationStateOrRealizationState(
                    InitMockDB.getACCOUNT_NUMBER_2(),
                    InitMockDB.getACCOUNT_NUMBER_2(),
                    TransferState.WAITING,
                    TransferState.IN_PROGRESS
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
