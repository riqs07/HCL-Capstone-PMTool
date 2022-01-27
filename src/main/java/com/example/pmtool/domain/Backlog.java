package com.example.pmtool.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Backlog {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // LIFETIME TOTAL TASKS
    private Integer PTSequence = 0;

    public Integer getTaskTotal() {
        return taskTotal;
    }

    public void setTaskTotal(Integer taskTotal) {
        this.taskTotal = taskTotal;
    }

    // CURRENT TOTAL TASKS
    private Integer taskTotal = 0;

    public String getProjectUUID() {
        return projectUUID;
    }

    public void setProjectUUID(String projectUUID) {
        this.projectUUID = projectUUID;
    }

    private String projectUUID;


    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="project_id",nullable = false)
    @JsonIgnore
    private Project project;


    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "backlog")
    private List<ProjectTask> projectTasks = new ArrayList<>();

    public Backlog(){}



    public List<ProjectTask> getProjectTasks() {
        return projectTasks;
    }

    public void setProjectTasks(List<ProjectTask> projectTasks) {
        this.projectTasks = projectTasks;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getPTSequence() {
        return PTSequence;
    }

    public void setPTSequence(Integer PTSequence) {
        this.PTSequence = PTSequence;
    }


}
