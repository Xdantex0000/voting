package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.dao.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 19.04.2019.
 */
public interface UserRepository extends JpaRepository<User, Long> {

    User findByName(String name);

//    @Query("Select u FROM User u")
//    User customFind();

}
