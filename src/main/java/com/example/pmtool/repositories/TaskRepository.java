package com.example.pmtool.repositories;

import com.example.pmtool.domain.Backlog;
import com.example.pmtool.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<Project,Integer> {


}
