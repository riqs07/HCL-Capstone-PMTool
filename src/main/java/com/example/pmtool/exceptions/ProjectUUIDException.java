package com.example.pmtool.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectUUIDException extends RuntimeException{

    public ProjectUUIDException(String message) {
        super(message);
    }
}
