package com.onbank.api.service.implementation;

import com.onbank.api.model.User;
import com.onbank.api.repository.UserRepository;
import com.onbank.api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public Optional<User> getUser(Long id) {
        return userRepository.findById(id);
    }
}
