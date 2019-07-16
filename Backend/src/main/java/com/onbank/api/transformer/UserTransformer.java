package com.onbank.api.transformer;

import com.onbank.api.dto.UserDto;
import com.onbank.api.model.User;
import org.springframework.beans.BeanUtils;

public class UserTransformer {

    public static User convertToEntity(UserDto dto){
        User user = new User();
        BeanUtils.copyProperties(dto, user);
        return user;
    }

    public static UserDto convertToDto(User user){
        UserDto dto = new UserDto();
        BeanUtils.copyProperties(user, dto);
        return dto;
    }
}
