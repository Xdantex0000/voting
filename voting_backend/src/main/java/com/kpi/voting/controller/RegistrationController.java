package com.kpi.voting.controller;

import com.kpi.voting.domain.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class RegistrationController {

    @Autowired
    private UserService userService;

    @PutMapping("/addUser")
    public void registerUser(@RequestParam String login, @RequestParam String password, @RequestParam String name, @RequestParam String email){
        userService.createUser(login, password, name, email);
    }
}
