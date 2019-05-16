package com.kpi.voting.controller;


import com.kpi.voting.dao.entity.AdminQuestion;
import com.kpi.voting.domain.AdminQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin-question")
public class AdminQuestionController {

    @Autowired
    private AdminQuestionService adminQuestionService;

    @GetMapping()
    public @ResponseBody String[] getQuestion() {
        return adminQuestionService.getAllQuestions();
    }

    @PutMapping()
    public void sendQuestion(@RequestParam String question, @RequestParam String email) {
        adminQuestionService.addQuestion(question,email);
    }
}
