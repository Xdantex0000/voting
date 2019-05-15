package com.kpi.voting.domain;


import com.kpi.voting.dao.AdminQuestionRepository;
import com.kpi.voting.dao.entity.AdminQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminQuestionService {

    @Autowired
    private AdminQuestionRepository adminQuestionRepository;

    public void addQuestion(String question){
        AdminQuestion adminQuestion = new AdminQuestion();
        adminQuestion.setQuestion(question);
        adminQuestionRepository.save(adminQuestion);
    }
    public Iterable<AdminQuestion> getAllQuestions() {
        return adminQuestionRepository.findAll();
    }
}
