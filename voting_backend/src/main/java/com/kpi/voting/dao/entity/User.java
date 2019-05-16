package com.kpi.voting.dao.entity;

import javax.persistence.*;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 19.04.2019.
 */
@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String login;
    @Column
    private String password;
    @Column
    private String priveleged;
    @Column
    private String email;

    public User(){}

    public User(String privel) {
        this.priveleged=privel;
    }

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPriveleged() {
        return priveleged;
    }

    public void setPriveleged(String priveleged) {
        this.priveleged = priveleged;
    }
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
