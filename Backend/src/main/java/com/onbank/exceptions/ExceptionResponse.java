package com.onbank.exceptions;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class ExceptionResponse {

    private int code;
    private String description;
}
