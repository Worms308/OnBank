package com.onbank.api.model.csv;

import com.onbank.api.model.Transfer;
import com.opencsv.CSVReader;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.HeaderColumnNameTranslateMappingStrategy;

import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class CSVToTransfer {

    public static List<Transfer> generateTransfers(String filename) throws IOException {
        Map<String, String> mapping = new HashMap<>();
        mapping.put("id", "id");
        mapping.put("date", "date");
        mapping.put("recipientName", "recipientName");
        mapping.put("recipientAccountNumber", "recipientAccountNumber");
        mapping.put("description", "description");
        mapping.put("operationType", "operationType");
        mapping.put("amount", "amount");
        mapping.put("accountBalance", "accountBalance");
        mapping.put("realizationState", "realizationState");
        mapping.put("senderName", "senderName");
        mapping.put("senderAccountNumber", "senderAccountNumber");
        HeaderColumnNameTranslateMappingStrategy<CSVTransferDto> strategy = new HeaderColumnNameTranslateMappingStrategy<>();
        strategy.setType(CSVTransferDto.class);
        strategy.setColumnMapping(mapping);

        CSVReader csvReader = new CSVReader(new FileReader(filename));

        CsvToBean csvToBean = new CsvToBean();
        csvToBean.setCsvReader(csvReader);
        csvToBean.setMappingStrategy(strategy);
        List<CSVTransferDto> result = csvToBean.parse();
        csvReader.close();
        return result.stream().map(CSVTransferDto::convertToEntity).collect(Collectors.toList());
    }
}
