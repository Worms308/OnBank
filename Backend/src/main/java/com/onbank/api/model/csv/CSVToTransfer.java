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

public class CSVToTransfer {

    public static List<Transfer> generateTransfers(String filename) throws IOException {
        Map<String, String> mapping = new HashMap<>();
//        mapping.put("id","id");
//        mapping.put("date","date");
        mapping.put("recipientName", "recipientName");
        mapping.put("recipientAccountNumber", "recipientAccountNumber");
        mapping.put("description", "description");
//        mapping.put("operationType","operationType");
        mapping.put("amount", "amount");
        mapping.put("accountBalance", "accountBalance");
//        mapping.put("realizationState","realizationState");
        mapping.put("senderName", "senderName");
        mapping.put("senderAccountNumber", "senderAccountNumber");
        HeaderColumnNameTranslateMappingStrategy<Transfer> strategy = new HeaderColumnNameTranslateMappingStrategy<>();
        strategy.setType(Transfer.class);
        strategy.setColumnMapping(mapping);

        CSVReader csvReader = new CSVReader(new FileReader(filename));

        CsvToBean csvToBean = new CsvToBean();
        csvToBean.setCsvReader(csvReader);
        csvToBean.setMappingStrategy(strategy);
        return csvToBean.parse();
    }
}
