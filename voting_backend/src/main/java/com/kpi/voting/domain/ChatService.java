package com.kpi.voting.domain;

import com.kpi.voting.dao.ChatRepository;
import com.kpi.voting.dao.entity.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 08.04.2019.
 */
@Service
public class ChatService {

    @Autowired
    private ChatRepository chatRepository;

    public void addMessage(String login, String message){
        ChatMessage chatMessage = new ChatMessage();
        chatMessage.setMessage(message);
        chatMessage.setUser_Login(login);
        chatRepository.save(chatMessage);
    }

    public String[] getAllMessages() {
        String[] str = new String[100];
        List<ChatMessage> messages = chatRepository.findAll();
        for(int i = 0; i < messages.size();i++){
            str[i]= messages.get(i).getUser_Login() + ": " + messages.get(i).getMessage();
        }
        return str;
    }

}
