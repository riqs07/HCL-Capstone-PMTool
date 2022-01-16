package com.example.pmtool.services;

import com.example.pmtool.domain.Project;
import com.example.pmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository repo;

    public Project saveOrUpdateProject(Project p){


        // Logic //


        return repo.save(p);

    }
}
