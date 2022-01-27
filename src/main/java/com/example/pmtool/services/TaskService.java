package com.example.pmtool.services;

import com.example.pmtool.domain.Backlog;
import com.example.pmtool.domain.Project;
import com.example.pmtool.domain.ProjectTask;
import com.example.pmtool.domain.Status;
import com.example.pmtool.repositories.BacklogRepository;
import com.example.pmtool.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TaskService {
    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private TaskRepository taskRepository;





    public ProjectTask addProjectTask(String projectUUID, ProjectTask projectTask){


        Backlog backlog = backlogRepository.findByProjectUUID(projectUUID);

        projectTask.setBacklog(backlog);

        Integer SEQUENCE = backlog.getPTSequence();
        Integer total = backlog.getTaskTotal();

        SEQUENCE++;
        total++;

        backlog.setPTSequence(SEQUENCE);

        projectTask.setProjectSequence(projectUUID + "-" + SEQUENCE);
        projectTask.setProjectUUID(projectUUID);

///OPtionalS????
        if(projectTask.getPriority() == 0 || projectTask.getPriority() == null){
            projectTask.setPriority(3);
        }

        if(projectTask.getStatus() == null){
            projectTask.setStatus(Status.TODO);
        }

        return taskRepository.save(projectTask);

    };


    public Iterable<ProjectTask>findBacklogByUUID (String projectUUID){
        return taskRepository.findByProjectUUIDOrderByPriority(projectUUID);

    }

}
