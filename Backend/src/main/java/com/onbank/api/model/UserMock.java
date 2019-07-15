package com.onbank.api.model;

import lombok.Data;

@Data
public class UserMock {
    //TODO usunąć te pola przy integracji logiki z użytkownikiem!!!
    private final String username = "Jan Kowalski";
    private final String accountNumber = "PL32349188939421535264612669";
}
