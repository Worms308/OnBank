package com.onbank.http;

import java.util.Arrays;

import com.onbank.api.model.User;
import org.springframework.security.authentication.AbstractAuthenticationToken;

public class AuthenticationToken extends AbstractAuthenticationToken {

    private static final long serialVersionUID = -1949976839306453197L;
    private User authenticatedUser;
    private Long uid;

    public AuthenticationToken(Long uid) {
        super(Arrays.asList());
        this.uid = uid;
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public Object getPrincipal() {
        return authenticatedUser;
    }

    public void setPrincipal(User user) {
        this.authenticatedUser = user;
    }

    public Long getUid() {
        return uid;
    }

}