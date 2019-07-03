package com.onbank.exceptions.advice;

import com.onbank.TestEndPoint;
import com.onbank.exceptions.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class ExceptionControllerAdvice {

    //Nieznany blad
    @ExceptionHandler(Exception.class)
    public ResponseEntity <ExceptionResponse> unknownException(final Exception e) {
        ExceptionResponse exceptionResponse = new ExceptionResponse();
        exceptionResponse.setCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
        exceptionResponse.setDescription("Exception msg: " + e.toString());
        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }

}
