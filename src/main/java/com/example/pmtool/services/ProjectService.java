package com.example.pmtool.services;

import com.example.pmtool.domain.Backlog;
import com.example.pmtool.domain.Project;
import com.example.pmtool.exceptions.ProjectUUIDException;
import com.example.pmtool.repositories.BacklogRepository;
import com.example.pmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    public Project saveProject(Project p){

        try {
            p.setProjectUUID(p.getProjectUUID().toUpperCase());


            Backlog b = new Backlog();
            p.setBacklog(b);
            b.setProject(p);
            b.setProjectUUID(p.getProjectUUID());


            return projectRepository.save(p);

        } catch (Exception e){
            throw new ProjectUUIDException("Project UUID " + p.getProjectUUID().toUpperCase() + " already exists");
        }
    }

    public Project updateProject(Project p){

        try {

           Backlog b = backlogRepository.findByProjectUUID(p.getProjectUUID());

            p.setBacklog(b);

            return projectRepository.save(p);

        } catch (Exception e){
            throw new ProjectUUIDException("Project UUID " + p.getProjectUUID().toUpperCase() + " already exists");
        }
    }


    public Project findProjectByUUID(String projectUUID){

        Project p = projectRepository.findByProjectUUID(projectUUID.toUpperCase());

        if (p == null){
            throw new ProjectUUIDException("Project UUID does not exist");
        }
        return p;
    }


    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    };

    public void deleteProjectbyUUID(String projectUUID){

        Project p = projectRepository.findByProjectUUID(projectUUID.toUpperCase());

        if (p == null){
            throw new ProjectUUIDException("Can not Delete project " + projectUUID + " it does not exist.");

        }

        projectRepository.delete(p);
    }



}

