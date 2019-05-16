package com.kpi.voting.dao.entity;

import javax.persistence.*;

@Entity
@Table(name = "ChatMessage")
@Cacheable(false)
public class ChatMessage {

    public ChatMessage() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String User_Login;
    @Column
    private String Message;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUser_Login() {
        return User_Login;
    }

    public void setUser_Login(String user_Login) {
        User_Login = user_Login;
    }

    public String getMessage() {
        return Message;
    }

    public void setMessage(String message) {
        Message = message;
    }
}
