package com.onbank.api.controller;

import com.onbank.LoadProperties;
import com.onbank.api.model.User;
import com.onbank.api.model.enums.Nationality;
import com.onbank.api.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.time.LocalDate;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@LoadProperties
@SpringBootTest
public class UserControllerTest {
    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    public static User createMockUser(String pesel) {
        User user = new User();
        user.setId(1L);
        user.setName("Testman");
        user.setSurname("Testowski");
        user.setPhone("555666777");
        user.setEmail("test@wp.pl");
        user.setPesel(pesel);
        user.setNationality(Nationality.PL);
        user.setBirthPlace("Warszawa");
        user.setBirthDate(LocalDate.of(1999, 11, 11));
        user.setMotherMaidenName("Sprawdzająca");
        user.setIdNumber("YBC993344");
        return user;
    }

    @Test
    void shouldReturnOneUser() throws Exception {
        User tmp = userRepository.saveAndFlush(createMockUser("99111100234"));

        mockMvc.perform(get("/api/getProfileUser/" + tmp.getId())
                .header("userID", "1"))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    void shouldReturnNoUser() throws Exception {
        userRepository.deleteAll();
        mockMvc.perform(get("/api/getProfileUser/1")
                .header("userID", "1"))
                .andDo(print())
                .andExpect(status().isNotFound());
    }
}
