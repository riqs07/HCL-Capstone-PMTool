package com.example.pmtool.services;

import com.example.pmtool.domain.Backlog;
import com.example.pmtool.domain.ProjectTask;
import com.example.pmtool.domain.Status;
import com.example.pmtool.exceptions.ProjectNotFoundException;
import com.example.pmtool.exceptions.ProjectUUIDException;
import com.example.pmtool.repositories.BacklogRepository;
import com.example.pmtool.repositories.ProjectRepository;
import com.example.pmtool.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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


        // check if project exist
        Optional.ofNullable(backlogRepository.findByProjectUUID(projectUUID))
                .orElseThrow(() -> new ProjectNotFoundException("Project with ID: " + projectUUID + " does not exist"));


        // check if task exist
        Optional.ofNullable(taskRepository.findByProjectSequence(projectSequence))
                .orElseThrow(() -> new ProjectNotFoundException("Project with ID: " + projectSequence + " does not exist"));


//        if (!foundTask.getProjectUUID().equals(projectUUID)) {
//            throw new ProjectNotFoundException("Project Task: " + projectSequence + " not found");
//
//        }
        return taskRepository.findByProjectSequence(projectSequence);

    }


    public ProjectTask updateByProjectSequence(ProjectTask updatedTask, String projectUUID, String projectSequence){

        // Is an optional that will throw exception if it returns null
        // if not null then fill oldTask Object
        Optional.ofNullable(taskRepository.findByProjectSequence(projectSequence))
                .orElseThrow(() -> new ProjectUUIDException("Project UUID: " + projectUUID + " does not exist"));


        taskRepository.save(updatedTask);
        return updatedTask;

    }

    public void deleteTaskByProjectSequence(String projectUUID, String projectSequence){
        ProjectTask projectTask = findTaskByProjectSequence(projectUUID,projectSequence);


        Backlog backlog = projectTask.getBacklog();
        List<ProjectTask> pts = backlog.getProjectTasks();
        pts.remove(projectTask);
        backlogRepository.save(backlog);


        taskRepository.delete(projectTask);
    }


    public int countAllProjectTasks(String projectUUID){

        Optional.ofNullable(projectRepository.findByProjectUUID(projectUUID))
                .orElseThrow(() -> new ProjectUUIDException("Can not count. Project: " + projectUUID + " does not exist"));


        int count = taskRepository.countAllByProjectUUID(projectUUID);

    return count;
    }


    public long sumOfProjectTasks(){

        long count = taskRepository.count();

        return count;
    }

    public int countAllActiveBacklogTasks(String projectUUID){

        Optional.ofNullable(projectRepository.findByProjectUUID(projectUUID))
                .orElseThrow(() -> new ProjectUUIDException("Can not count. Project: " + projectUUID + " does not exist"));

//
//        int count = taskRepository.countAllByProjectUUIDAndStatusDoneNot(projectUUID);

        return 2;
    }
}