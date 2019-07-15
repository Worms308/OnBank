package com.onbank.api.model.csv;

import com.onbank.api.model.enums.OperationType;
import com.onbank.api.model.Transfer;
import com.onbank.api.model.enums.TransferState;
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

    public static CSVTransferDto convertToDTO(Transfer transfer){
        CSVTransferDto dto = new CSVTransferDto();
        dto.setId(transfer.getId());
        if (transfer.getDate() != null)
            dto.setDate(Date.from(transfer.getDate().atStartOfDay(ZoneId.systemDefault()).toInstant()));
        dto.setRecipientName(transfer.getRecipientName());
        dto.setRecipientAccountNumber(transfer.getRecipientAccountNumber());
        dto.setDescription(transfer.getDescription());
        dto.setOperationType(transfer.getOperationType().name());
        dto.setAmount(transfer.getAmount());
        dto.setAccountBalance(transfer.getAccountBalance());
        dto.setRealizationState(transfer.getRealizationState().name());
        dto.setSenderName(transfer.getSenderName());
        dto.setSenderAccountNumber(transfer.getSenderAccountNumber());
        return dto;
    }
}
