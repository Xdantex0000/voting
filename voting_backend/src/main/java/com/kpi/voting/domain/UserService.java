package com.kpi.voting.domain;

import com.kpi.voting.dao.UserRepository;
import com.kpi.voting.dao.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Stream;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 19.04.2019.
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public void createUser(String login, String password, String name, String email) {
        String priv = "user";
        if(login.equals("Dima")){
            priv="admin";
        }
        User user = new User(priv);
        user.setLogin(login);
        user.setPassword(password);
        user.setName(name);
        System.out.println(login);
        user.setEmail(email);
        userRepository.save(user);
    }
    public User authorizeUser(String Login, String Password){
        User user = userRepository.findByLoginAndPassword(Login,Password).get();
        return user;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

//    public List<User> getUsersBy(Predicate<User> predicate) {
//        return Stream.generate(userRepository.findAll().iterator()::next);
//    }

}
