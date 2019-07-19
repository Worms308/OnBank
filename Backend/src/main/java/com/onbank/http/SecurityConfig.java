package com.onbank.http;

import org.springframework.beans.factory.annotation.Autowired;

public class SecurityConfig {

    @Autowired
    private HeadersHandler headersHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .authorizeRequests()
                .antMatcher("/user")
                .addFilterBefore(new HeadersAuthenticator(), HeadersAuthenticator.class)
        ;

    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.headersHandler(headersHandler);
    }
}
