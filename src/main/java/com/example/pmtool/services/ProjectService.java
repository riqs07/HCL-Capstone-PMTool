package com.example.pmtool.services;

import com.example.pmtool.domain.Project;
import com.example.pmtool.exceptions.ProjectUUIDException;
import com.example.pmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository repo;

    public Project saveOrUpdateProject(Project p){

        try {

            p.setProjectUUID(p.getProjectUUID().toUpperCase());
            return repo.save(p);

        } catch (Exception e){
            throw new ProjectUUIDException("Project UUID " + p.getProjectUUID().toUpperCase() + " already exists");
        }

    }

    public Project findProjectByUUID(String projectUUID){

        Project p = repo.findByProjectUUID(projectUUID.toUpperCase());

        if (p == null){
            throw new ProjectUUIDException("Project UUID does not exist");
        }
        return p;
    }


    public Iterable<Project> findAllProjects(){



        return repo.findAll();
    };

}

