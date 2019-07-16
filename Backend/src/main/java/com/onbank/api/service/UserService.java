package com.onbank.api.service;

import com.onbank.api.model.User;

import java.util.Optional;

public interface UserService {

    Optional<User> getUser(Long id);
}
