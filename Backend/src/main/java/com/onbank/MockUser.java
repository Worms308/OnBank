package com.onbank;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class MockUser {
    private String username = "Jan Kowalski";
    private String accountNumber = "PL32349188939421535264612669";
}
