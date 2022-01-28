package com.example.pmtool.repositories;

import com.example.pmtool.domain.Project;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends CrudRepository<Project,Integer> {


    // Spring JPA is pretty fancy and can smartly learn variable names


    Project findByProjectUUID(String projectUUID);

    // Count Total Projects
    @Override
    Iterable<Project> findAll();

}
