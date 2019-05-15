package com.kpi.voting.dao.entity;

import javax.persistence.*;

@Entity
@Table(name = "AdminQuestion")
@Cacheable(false)
public class AdminQuestion {

    public AdminQuestion() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    @Column
    private String question;

}
