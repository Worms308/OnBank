package com.onbank.api.service.implementation;

import com.onbank.api.model.User;
import com.onbank.api.repository.UserRepository;
import com.onbank.api.service.UserService;
import com.onbank.exceptions.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User getUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElseThrow(() -> new UserNotFoundException("User id=" + id + " not found."));
    }
}
