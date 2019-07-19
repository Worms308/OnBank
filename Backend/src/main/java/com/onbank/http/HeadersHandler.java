package com.onbank.http;

import com.onbank.api.model.User;
import com.onbank.api.repository.UserRepository;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.apache.tomcat.websocket.AuthenticationException;
import org.omg.CORBA.UnknownUserException;
import org.springframework.beans.factory.annotation.Autowired;

public class HeadersHandler {

    // This would be a JPA repository to snag your user entities
    private final UserRepository userRepository;

    @Autowired
    public DemoAuthenticationProvider(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        DemoAuthenticationToken demoAuthentication = (DemoAuthenticationToken) authentication;
        User user = userRepository.find(demoAuthentication.getId());

        if(user == null){
            throw new UnknownUserException("Could not find user with ID: " + demoAuthentication.getId());
        }

        return user;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return DemoAuthenticationToken.class.isAssignableFrom(authentication);
    }

    }