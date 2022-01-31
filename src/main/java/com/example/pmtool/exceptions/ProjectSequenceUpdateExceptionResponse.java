package com.example.pmtool.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectSequenceUpdateExceptionResponse extends RuntimeException{
    public ProjectSequenceUpdateExceptionResponse(String message) {
        super(message);
    }
}