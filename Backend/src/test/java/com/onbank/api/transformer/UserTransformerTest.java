package com.onbank.api.transformer;

import com.onbank.api.controller.UserControllerTest;
import com.onbank.api.dto.TransferDto;
import com.onbank.api.dto.UserDto;
import com.onbank.api.model.Transfer;
import com.onbank.api.model.User;
import com.onbank.http.AuthenticationToken;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserTransformerTest {

    @BeforeEach
    void setup() {
        AuthenticationToken authT = new AuthenticationToken(1L);
        authT.setPrincipal(UserControllerTest.createMockUser("99112200998"));
        Authentication auth = authT;
        SecurityContextHolder.getContext().setAuthentication(auth);
    }

    @Test
    void convertToDtoSuccessTest(){
        User user = new User();
        user.setName("Abacki");
        UserTransformer transformer = new UserTransformer();

        assertEquals(true, user.getName().equals(transformer.convertToDto(user).getName()));
    }

    @Test
    void convertToEntitySuccessTest(){
        UserDto userDto = new UserDto();
        userDto.setName("Abacki");
        UserTransformer transformer = new UserTransformer();

        assertEquals(true, userDto.getName().equals(transformer.convertToEntity(userDto).getName()));
    }

}
