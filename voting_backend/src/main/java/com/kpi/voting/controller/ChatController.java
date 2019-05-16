package com.kpi.voting.controller;

import com.kpi.voting.domain.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 01.04.2019.
 */
@RestController
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @GetMapping()
    public @ResponseBody String[] getAllMessages() {
        return chatService.getAllMessages();
    }

    @PutMapping("/addMessage")
    public void addMessage(@RequestParam String login, @RequestParam String message){
        chatService.addMessage(login,message);
    }

}
