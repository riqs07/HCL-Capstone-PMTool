package com.example.pmtool.exceptions;

public class ProjectUUIDExceptionResponse {
    public String getProjectUUID() {
        return projectUUID;
    }

    public void setProjectUUID(String projectUUID) {
        this.projectUUID = projectUUID;
    }

    private String projectUUID;

    public ProjectUUIDExceptionResponse(String projectUUID){
        this.projectUUID = projectUUID;
    }
}
