package com.onbank.http;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.springframework.boot.context.properties.source.ConfigurationPropertyName.isValid;

public class HeadersAuthenticator extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String userID = request.getHeader("userID");

        // validate the value in xAuth
        if(!isValid(userID)){
            throw new SecurityException();
        }

        // The token is 'valid' so magically get a user id from it
        Long id = getUserIdFromToken(userID);

        // Create our Authentication and let Spring know about it
        Authentication auth = new DemoAuthenticationToken(id);
        SecurityContextHolder.getContext().setAuthentication(auth);

        filterChain.doFilter(request, response);
    }
}
