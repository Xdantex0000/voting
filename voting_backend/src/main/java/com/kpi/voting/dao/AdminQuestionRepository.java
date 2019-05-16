package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.AdminQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminQuestionRepository extends JpaRepository<AdminQuestion, Long> {
    List<AdminQuestion> findAll();

}
