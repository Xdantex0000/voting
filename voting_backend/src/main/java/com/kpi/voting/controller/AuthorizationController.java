package com.kpi.voting.controller;

import com.kpi.voting.dao.entity.User;
import com.kpi.voting.domain.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/authorization")
public class AuthorizationController {

    @Autowired
    private UserService userService;

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(value = "/{login}_{password}", method = RequestMethod.GET)
    public @ResponseBody
    User getUser(@PathVariable String login, @PathVariable String password) {
        return userService.authorizeUser(login,password);
    }
}