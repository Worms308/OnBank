package com.onbank.http;

import com.onbank.api.model.User;
import com.onbank.api.repository.UserRepository;
import com.onbank.exceptions.UserNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class HeadersAuthenticationProvider implements AuthenticationProvider {

    private final UserRepository userRepository;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        AuthenticationToken auth = (AuthenticationToken) authentication;
        User user = userRepository.findById(auth.getUid())
                .orElseThrow(
                        () -> new UserNotFoundException("User id=" + auth.getUid() + " not found.")
                );

        auth.setPrincipal(user);

        return auth;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return AuthenticationToken.class.isAssignableFrom(authentication);
    }

}