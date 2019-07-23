package com.onbank.api.transformer;

import com.onbank.api.dto.UserDto;
import com.onbank.api.model.User;
import com.onbank.http.UserData;
import com.onbank.starter.InitMockDB;
import org.springframework.beans.BeanUtils;

public class UserTransformer {

    public static User convertToEntity(UserDto dto) {
        User user = new User();
        BeanUtils.copyProperties(dto, user);
        return user;
    }

    public static UserDto convertToDto(User user) {
        UserDto dto = new UserDto();
        BeanUtils.copyProperties(user, dto);
        dto.setAccountNumber(
                UserData.getUser().getId() == 1
                        ? InitMockDB.getACCOUNT_NUMBER_2()
                        : InitMockDB.getACCOUNT_NUMBER_1());
        return dto;
    }
}
