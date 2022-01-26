package com.example.pmtool.web_api;


import com.example.pmtool.domain.ProjectTask;
import com.example.pmtool.services.ErrorValidationService;
import com.example.pmtool.services.ProjectService;
import com.example.pmtool.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/backlog")
public class BacklogController {

    @Autowired
    private TaskService taskService;


    @Autowired
    private ErrorValidationService errorService;


    @PostMapping("/{backlog_id}")
    public ResponseEntity<?> addProjectTaskToBacklog(@Valid @RequestBody ProjectTask projectTask, BindingResult result , @PathVariable String backlog_id){

        ResponseEntity<?> errorMap = errorService.mapErrors(result);
        if (errorMap != null) return errorMap;


        ProjectTask finalizedTask = taskService.addProjectTask(backlog_id,projectTask);

        return new ResponseEntity<ProjectTask>(finalizedTask, HttpStatus.CREATED);
    }


}
