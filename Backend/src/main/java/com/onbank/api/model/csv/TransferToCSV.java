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

public class TransferToCSV {

    public static void generateCSV(String filename, List<Transfer> transfers)
            throws IOException, CsvDataTypeMismatchException, CsvRequiredFieldEmptyException {
        filename = "csv/outcoming/" + filename;
        new File("csv/outcoming/").mkdir();
        FileWriter writer = new FileWriter(filename);

        StatefulBeanToCsvBuilder<Transfer> builder = new StatefulBeanToCsvBuilder(writer);
        StatefulBeanToCsv beanWriter = builder.build();

        beanWriter.write(transfers);
        writer.close();
    }
}
