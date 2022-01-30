package com.example.pmtool.services;

import com.example.pmtool.domain.Backlog;
import com.example.pmtool.domain.Project;
import com.example.pmtool.exceptions.ProjectUUIDException;
import com.example.pmtool.repositories.BacklogRepository;
import com.example.pmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

            Project toUpdate = projectRepository.findByProjectUUID(p.getProjectUUID());


           Backlog b = backlogRepository.findByProjectUUID(p.getProjectUUID());


           // Not sure why have to do it like this
            // setting toUpdate = p does not work as changes do not perist
            // i think it has to do with how sprinf loads this entity and not want to change it

            toUpdate.setBacklog(b);
            toUpdate.setProjectName(p.getProjectName());
            toUpdate.setDescription(p.getDescription());
            toUpdate.setStart_date(p.getStart_date());
            toUpdate.setEnd_date(p.getEnd_date());
            return projectRepository.save(toUpdate);

        } catch (Exception e){
            throw new ProjectUUIDException("Error Updating Project Data");
        }
    }


    public Project findProjectByUUID(String projectUUID){

        return  Optional.ofNullable(projectRepository.findByProjectUUID(projectUUID))
                .orElseThrow(() -> new ProjectUUIDException("Project UUID: " + projectUUID + " does not exist"));

    }


    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    };

    public void deleteProjectByUUID(String projectUUID){

        Project p =  Optional.ofNullable(projectRepository.findByProjectUUID(projectUUID))
                        .orElseThrow(() -> new ProjectUUIDException("Can not Delete project " + projectUUID + ". It does not exist."));

        projectRepository.delete(p);
    }


    public long getProjectTotal(){

        long count = projectRepository.count();

        return count;
    }


}

