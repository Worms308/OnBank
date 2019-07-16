package com.onbank.api.transformer;

import com.onbank.api.dto.TransferDto;
import com.onbank.api.dto.UserDto;
import com.onbank.api.model.Transfer;
import com.onbank.api.model.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserTransformerTest {
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
