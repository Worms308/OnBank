package com.onbank.exceptions.advice;

import com.onbank.exceptions.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.validation.ConstraintViolationException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;


@ControllerAdvice
public class ExceptionControllerAdvice {

    private void printError(Exception e){
        System.err.print(new Timestamp(new Date().getTime()) + "  EXCEPTION: ");
        e.printStackTrace();
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionResponse> handle(final MethodArgumentNotValidException exception) {
        BindingResult result = exception.getBindingResult();
        String errorMessage = result.getFieldError().getDefaultMessage();
        ExceptionResponse exceptionResponse = new ExceptionResponse(HttpStatus.BAD_REQUEST.value(), errorMessage);
        this.printError(exception);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity <ExceptionResponse> unknownException(final Exception e) {
        ExceptionResponse exceptionResponse = new ExceptionResponse();
        exceptionResponse.setCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
        exceptionResponse.setDescription("Exception msg: " + e.toString());
        this.printError(e);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
