package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.ChatMessage;
import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.dao.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 08.04.2019.
 */
@Repository
public interface ChatRepository extends JpaRepository<ChatMessage, Long> {
    List<ChatMessage> findAll();
}
