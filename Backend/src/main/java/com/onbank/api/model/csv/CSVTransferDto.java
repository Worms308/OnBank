package com.onbank.api.model.csv;

import com.onbank.api.model.OperationType;
import com.onbank.api.model.Transfer;
import com.onbank.api.model.TransferState;
import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvDate;
import lombok.Data;

import java.math.BigDecimal;
import java.time.ZoneId;
import java.util.Date;

@Data
public class CSVTransferDto {
    @CsvBindByName
    private Long id;
    @CsvBindByName
    @CsvDate(value = "yyyy-MM-dd")
    private Date date;
    @CsvBindByName
    private String recipientName;
    @CsvBindByName
    private String recipientAccountNumber;
    @CsvBindByName
    private String description;
    @CsvBindByName
    private String operationType;
    @CsvBindByName
    private BigDecimal amount;
    @CsvBindByName
    private BigDecimal accountBalance;
    @CsvBindByName
    private String realizationState;
    @CsvBindByName
    private String senderName;
    @CsvBindByName
    private String senderAccountNumber;

    public static Transfer convertToEntity(CSVTransferDto dto) {
        Transfer transfer = new Transfer();
        transfer.setId(dto.getId());
        if (dto.getDate() != null)
            transfer.setDate(dto.getDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate());
        transfer.setRecipientName(dto.getRecipientName());
        transfer.setRecipientAccountNumber(dto.getRecipientAccountNumber());
        transfer.setDescription(dto.getDescription());
        if (dto.getOperationType() != null)
            transfer.setOperationType(Enum.valueOf(OperationType.class, dto.getOperationType()));
        transfer.setAmount(dto.getAmount());
        transfer.setAccountBalance(dto.getAccountBalance());
        if (dto.getRealizationState() != null)
            transfer.setRealizationState(Enum.valueOf(TransferState.class, dto.getRealizationState()));
        transfer.setSenderName(dto.getSenderName());
        transfer.setSenderAccountNumber(dto.getSenderAccountNumber());
        return transfer;
    }
}
