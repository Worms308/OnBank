package com.onbank.api.controller;

import com.onbank.api.dto.UserDto;
import com.onbank.api.model.User;
import com.onbank.api.service.UserService;
import com.onbank.api.transformer.UserTransformer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/getProfileUser")
public class UserController {

    private final UserService userService;

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public UserDto getUser(@PathVariable Long id) {
        return UserTransformer.convertToDto(userService.getUser(id));
    }
}
