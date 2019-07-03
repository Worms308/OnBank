package com.onbank;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestEndPoint {

    @GetMapping("hello")
    public String getTest(){
        return "Hello world";
    }
    @GetMapping("null")
    public String getNullEx(){
        throw new NullPointerException();
    }
    @GetMapping("unknown")
    public String getUnknownEr(){
        int i=11/0;
        return "unknown ex";
    }
}
