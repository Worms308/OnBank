package com.onbank;

import org.junit.jupiter.api.extension.BeforeAllCallback;
import org.junit.jupiter.api.extension.ExtensionContext;

public class TestPropertiesExtensions implements BeforeAllCallback {

    @Override
    public void beforeAll(ExtensionContext context) {
        System.setProperty("app.home", "src/test/resources");
    }

}