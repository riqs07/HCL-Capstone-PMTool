package com.example.pmtool.domain;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Project {


    /// Because of created at auto insert. API will take bad info

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Message name is required")
    private String projectName;

    @NotBlank(message = "Project Identifier is required")
    @Column(updatable = false, unique = true)
    private String projectUUID;

    @NotBlank(message = "A description is required.")
    private String description;

    @JsonFormat(pattern = "yyyy-mm-dd")

    private Date start_date;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date end_date;


    @JsonFormat(pattern = "yyyy-mm-dd HH:mm:ss")
    private Date created_At;

    @JsonFormat(pattern = "yyyy-mm-dd HH:mm:ss")
    private Date updated_At;
    public Project() {

    }


    @PrePersist
    protected void onCreate(){
        this.created_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updated_At = new Date();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectUUID() {
        return projectUUID;
    }

    public void setProjectUUID(String projectUUID) {
        this.projectUUID = projectUUID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Date getCreated_At() {
        return created_At;
    }

    public void setCreated_At(Date created_At) {
        this.created_At = created_At;
    }

    public Date getUpdated_At() {
        return updated_At;
    }

    public void setUpdated_At(Date updated_At) {
        this.updated_At = updated_At;
    }
}
