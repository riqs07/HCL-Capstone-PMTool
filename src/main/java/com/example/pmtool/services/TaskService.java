package com.example.pmtool.services;

import com.example.pmtool.domain.Backlog;
import com.example.pmtool.domain.Project;
import com.example.pmtool.domain.ProjectTask;
import com.example.pmtool.domain.Status;
import com.example.pmtool.exceptions.ProjectNotFoundException;
import com.example.pmtool.repositories.BacklogRepository;
import com.example.pmtool.repositories.ProjectRepository;
import com.example.pmtool.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class TaskService {
    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ProjectRepository projectRepository;


    public ProjectTask addProjectTask(String projectUUID, ProjectTask projectTask) {

        try {

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
            if (projectTask.getPriority() == 0 || projectTask.getPriority() == null) {
                projectTask.setPriority(3);
            }

            if (projectTask.getStatus() == null) {
                projectTask.setStatus(Status.TODO);
            }

            return taskRepository.save(projectTask);
        } catch (Exception e) {
            throw new ProjectNotFoundException("Project not found");
        }

    }


    public Iterable<ProjectTask> findBacklogByUUID(String projectUUID) {


        Optional.ofNullable(projectRepository.findByProjectUUID(projectUUID))
                .orElseThrow(() -> new ProjectNotFoundException("Project with ID: " + projectUUID + " does not exist"));


        return taskRepository.findByProjectUUIDOrderByPriority(projectUUID);

    }


    public ProjectTask findTaskByProjectSequence(String projectUUID, String projectSequence) {

        /// OPTIONALS?

//            Optional<Backlog> backlog = Optional.ofNullable(backlogRepository.findByProjectUUID(projectUUID));


        // check if project exists
        Backlog backlog = backlogRepository.findByProjectUUID(projectUUID);
        if (backlog == null) {
            throw new ProjectNotFoundException("Project with ID: " + projectUUID + " does not exist");
        }

        // check if task exist
        ProjectTask foundTask = taskRepository.findByProjectSequence(projectSequence);

        if (foundTask == null) {
            throw new ProjectNotFoundException("Project Task: " + projectSequence + " not found");
        }


        if (!foundTask.getProjectUUID().equals(projectUUID)) {
            throw new ProjectNotFoundException("Project Task " + projectSequence + " does not exist in project:" + projectUUID);

        }
        return taskRepository.findByProjectSequence(projectSequence);

    }

}