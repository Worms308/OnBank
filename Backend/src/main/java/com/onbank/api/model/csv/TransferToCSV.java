package com.onbank.api.model.csv;

import com.onbank.api.model.Transfer;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import com.opencsv.exceptions.CsvDataTypeMismatchException;
import com.opencsv.exceptions.CsvRequiredFieldEmptyException;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

public class TransferToCSV {

    public static void generateCSV(String filename, List<Transfer> transfers)
            throws IOException, CsvDataTypeMismatchException, CsvRequiredFieldEmptyException {

        List<CSVTransferDto> temp = transfers.stream().map(CSVTransferDto::convertToDTO).collect(Collectors.toList());
        filename = "csv/outcoming/" + filename;
        new File("csv").mkdir();
        new File("csv/outcoming/").mkdir();
        FileWriter writer = new FileWriter(filename);

        StatefulBeanToCsvBuilder<CSVTransferDto> builder = new StatefulBeanToCsvBuilder(writer);
        StatefulBeanToCsv beanWriter = builder.build();

        beanWriter.write(temp);
        writer.close();
    }
}
