package com.onbank;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestEndPoint {

    @GetMapping(path = {"test", "hello"})
    public String getTest(){
        int i = 11/0;
        return "Hello world";
    }
}
