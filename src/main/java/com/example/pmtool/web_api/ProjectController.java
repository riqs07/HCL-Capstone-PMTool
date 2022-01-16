package com.example.pmtool.web_api;

import com.example.pmtool.domain.Project;
import com.example.pmtool.services.ErrorValidationService;
import com.example.pmtool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ErrorValidationService errorService;



    // @Valid checks incoming request against model, return 400 error
    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){



        ResponseEntity<?> errorMap = errorService.mapErrors(result);

        if (errorMap != null) return errorMap;
        Project p = projectService.saveOrUpdateProject(project);


        return  new ResponseEntity<Project>(project, HttpStatus.CREATED);
    };



}
