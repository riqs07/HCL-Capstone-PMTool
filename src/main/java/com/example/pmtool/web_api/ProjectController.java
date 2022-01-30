package com.example.pmtool.web_api;

import com.example.pmtool.domain.Project;
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
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private ErrorValidationService errorService;



    // @Valid checks incoming request against model, return 400 error
    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){

        ResponseEntity<?> errorMap = errorService.mapErrors(result);

        if (errorMap != null) return errorMap;


        Project p = projectService.saveProject(project);

        return  new ResponseEntity<Project>(project, HttpStatus.CREATED);
    };


    @PutMapping("")
    public ResponseEntity<?> updateProject(@Valid @RequestBody Project project, BindingResult result){

        ResponseEntity<?> errorMap = errorService.mapErrors(result);

        if (errorMap != null) return errorMap;
        Project p = projectService.updateProject(project);


        return  new ResponseEntity<Project>(project, HttpStatus.OK);
    };


    //not the route but just using passed in var
    // then use that var to FIND
    // spent an hour working on fix, had to do with casing
    @GetMapping("/{projectUUID}")
    public  ResponseEntity<?> getProjectByUUID(@PathVariable String projectUUID){



    Project p = projectService.findProjectByUUID(projectUUID);

    return new ResponseEntity<Project>(p,HttpStatus.OK);

    }

    @GetMapping("/all")
    public Iterable<Project> getAllProjects(){return projectService.findAllProjects();}


    @GetMapping("/sum")
    public long getProjectTotal(){return projectService.getProjectTotal();}



    @DeleteMapping("{projectUUID}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectUUID){
      projectService.deleteProjectByUUID(projectUUID);

      return new ResponseEntity<String>("Project: " + projectUUID + " was deleted!",HttpStatus.OK);
    };
}
