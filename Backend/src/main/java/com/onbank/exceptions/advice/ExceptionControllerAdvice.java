package com.onbank.exceptions.advice;

import com.onbank.exceptions.ExceptionResponse;
import com.onbank.exceptions.TransferNotFoundException;
import com.onbank.exceptions.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.persistence.EntityNotFoundException;
import javax.validation.ConstraintViolationException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.NoSuchElementException;


@ControllerAdvice
public class ExceptionControllerAdvice {

    private void printError(Exception e){
        System.err.print(new Timestamp(new Date().getTime()) + "  EXCEPTION: ");
        e.printStackTrace();
    }

    @ExceptionHandler(TransferNotFoundException.class)
    public ResponseEntity<ExceptionResponse> notFound(final TransferNotFoundException exception) {
        String errorMessage = exception.toString();
        ExceptionResponse exceptionResponse = new ExceptionResponse(HttpStatus.NOT_FOUND.value(), errorMessage);
        this.printError(exception);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ExceptionResponse> notFound(final UserNotFoundException exception) {
        String errorMessage = exception.toString();
        ExceptionResponse exceptionResponse = new ExceptionResponse(HttpStatus.NOT_FOUND.value(), errorMessage);
        this.printError(exception);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionResponse> validation(final MethodArgumentNotValidException exception) {
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
