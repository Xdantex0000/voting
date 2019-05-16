package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.dao.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 19.04.2019.
 */
public interface UserRepository extends JpaRepository<User, Long> {

    User findByName(String name);
    Optional<User> findByLoginAndPassword(String Login, String Password);
    Optional<User> findById(int id);
//    @Query("Select u FROM User u")
//    User customFind();

}
