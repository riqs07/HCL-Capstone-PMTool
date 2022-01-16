package com.example.pmtool.repositories;

import com.example.pmtool.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends CrudRepository<Project,Long> {


    @Override
    Iterable<Project> findAllById(Iterable<Long> longs);
}
