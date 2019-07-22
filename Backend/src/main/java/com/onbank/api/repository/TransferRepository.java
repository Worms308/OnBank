package com.onbank.api.repository;

import com.onbank.api.model.Transfer;
import com.onbank.api.model.enums.TransferState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TransferRepository extends JpaRepository<Transfer, Long> {

    List<Transfer> getTransfersBySenderAccountNumberOrRecipientAccountNumber(String senderAccountNumber, String recipientAccountNumber);
    List<Transfer> findByRealizationStateAndDateBefore(TransferState realizationState, LocalDate firstDate);

}
