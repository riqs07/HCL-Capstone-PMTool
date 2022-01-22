package com.example.pmtool.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.net.BindException;

import java.util.HashMap;
import java.util.Map;


@Service
public class ErrorValidationService {

    public ResponseEntity<?> mapErrors(BindingResult result){
        // If request body is Misshapen. Set up server response
        if (result.hasErrors()){

            // Making a Map K,V pair from the JSON Object to return another JSON-like object lol
            Map<String,String> errorResponse = new HashMap<>();

            for (FieldError e : result.getFieldErrors()){
                errorResponse.put(e.getField(),e.getDefaultMessage());
            }

            return new ResponseEntity<Map<String,String>>(errorResponse,HttpStatus.BAD_REQUEST);
        }
        return null;
    }

}
