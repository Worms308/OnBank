package com.onbank.exceptions.advice;

import com.onbank.exceptions.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.sql.Timestamp;
import java.util.Date;


@ControllerAdvice
public class ExceptionControllerAdvice {

    @ExceptionHandler(Exception.class)
    public ResponseEntity <ExceptionResponse> unknownException(final Exception e) {
        ExceptionResponse exceptionResponse = new ExceptionResponse();
        exceptionResponse.setCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
        exceptionResponse.setDescription("Exception msg: " + e.toString());
        System.err.print(new Timestamp(new Date().getTime()) + "  EXCEPTION: ");
        e.printStackTrace();
        return new ResponseEntity<>(exceptionResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
