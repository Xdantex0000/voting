package com.kpi.voting.dao.entity;

import javax.persistence.*;

@Entity
@Table(name = "AdminQuestion")
@Cacheable(false)
public class AdminQuestion {

    public AdminQuestion() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String question;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }


}
