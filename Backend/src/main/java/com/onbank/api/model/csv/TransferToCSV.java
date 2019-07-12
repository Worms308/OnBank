package com.onbank.api.model.csv;

import com.onbank.api.model.Transfer;
import com.opencsv.bean.ColumnPositionMappingStrategy;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import com.opencsv.exceptions.CsvDataTypeMismatchException;
import com.opencsv.exceptions.CsvRequiredFieldEmptyException;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class TransferToCSV {

    private final static String[] columns = {"date", "recipientName", "recipientAccountNumber", "senderName",
            "senderAccountNumber", "description", "OperationType", "amount"};

    public static void generateCSV(String filename, List<Transfer> transfers)
            throws IOException, CsvDataTypeMismatchException, CsvRequiredFieldEmptyException {
        filename = "csv/" + filename;
        new File("csv/").mkdir();
        FileWriter writer = new FileWriter(filename);

        ColumnPositionMappingStrategy mappingStrategy = new ColumnPositionMappingStrategy();
        mappingStrategy.setType(Transfer.class);

        mappingStrategy.setColumnMapping(columns);

        StatefulBeanToCsvBuilder<Transfer> builder = new StatefulBeanToCsvBuilder(writer);
        StatefulBeanToCsv beanWriter = builder.withMappingStrategy(mappingStrategy).build();

        beanWriter.write(transfers);
        writer.close();
    }
}
