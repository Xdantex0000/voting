package com.kpi.voting.domain;


import com.kpi.voting.dao.AdminQuestionRepository;
import com.kpi.voting.dao.entity.AdminQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminQuestionService {

    @Autowired
    private AdminQuestionRepository adminQuestionRepository;

    public void addQuestion(String question, String email){
        AdminQuestion adminQuestion = new AdminQuestion();
        adminQuestion.setQuestion(question);
        adminQuestion.setEmail(email);
        adminQuestionRepository.save(adminQuestion);
    }
    public String[] getAllQuestions() {
        String[] str = new String[100];
        List<AdminQuestion> questions = adminQuestionRepository.findAll();
        for(int i = 0; i < questions.size();i++){
            str[i]= "Question: " + questions.get(i).getQuestion() + "   Email: " + questions.get(i).getEmail();
        }
        return str;
    }
}
