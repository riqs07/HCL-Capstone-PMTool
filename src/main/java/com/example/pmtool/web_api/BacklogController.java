package com.example.pmtool.web_api;


import com.example.pmtool.domain.ProjectTask;
import com.example.pmtool.services.ErrorValidationService;
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


    @GetMapping("/{projectUUID}")
    public Iterable<ProjectTask> getProjectBacklog(@PathVariable String projectUUID){

        return taskService.findBacklogByUUID(projectUUID);
    }


    @GetMapping("/count/all/{projectUUID}")
    public int countAllTaskOnBacklog(@PathVariable String projectUUID){

        /// figure out way to not just return int but a proper JSON body
        return taskService.countAllProjectTasks(projectUUID);
    }


    @GetMapping("/sum")
    public long getTaskTotal(){return taskService.sumOfProjectTasks();}

    @GetMapping("/count/active/{projectUUID}")
    public int countActiveTaskOnBacklog(@PathVariable String projectUUID){

        return taskService.countAllActiveBacklogTasks(projectUUID);
    }


    @PostMapping("/{projectUUID}")
    public ResponseEntity<?> addProjectTaskToBacklog(@Valid @RequestBody ProjectTask projectTask, BindingResult result , @PathVariable String projectUUID){

        ResponseEntity<?> errorMap = errorService.mapErrors(result);
        System.out.println("yo");
        if (errorMap != null) return errorMap;


        ProjectTask finalizedTask = taskService.addProjectTask(projectUUID,projectTask);

        return new ResponseEntity<ProjectTask>(finalizedTask, HttpStatus.CREATED);
    }


    @GetMapping("/{projectUUID}/{projectSequence}")
    public ResponseEntity<?> getProjectTask(@PathVariable String projectUUID,@PathVariable String projectSequence){
        ProjectTask foundTask = taskService.findTaskByProjectSequence(projectUUID,projectSequence);


        return new ResponseEntity<ProjectTask>(foundTask,HttpStatus.OK);
    }


    @PatchMapping("/{projectUUID}/{projectSequence}")
    public ResponseEntity<?> updateProjectTask(@Valid @RequestBody ProjectTask projectTask, BindingResult result,
                                               @PathVariable String projectUUID, @PathVariable String projectSequence ){

        ResponseEntity<?> errorMap = errorService.mapErrors(result);
        if (errorMap != null) return errorMap;

        ProjectTask updatedTask = taskService.updateByProjectSequence(projectTask,projectUUID,projectSequence);

        return new ResponseEntity<ProjectTask>(updatedTask,HttpStatus.OK);
    }

    @DeleteMapping("/{projectUUID}/{projectSequence}")
    public ResponseEntity<?> deleteProjectTask(@PathVariable String projectUUID, @PathVariable String projectSequence){
        taskService.deleteTaskByProjectSequence(projectUUID, projectSequence);

        return new ResponseEntity<String>("Project Task " + projectSequence + " was deleted successfully", HttpStatus.OK);
    }
}
