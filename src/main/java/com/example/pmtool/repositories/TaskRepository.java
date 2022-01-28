package com.example.pmtool.repositories;

import com.example.pmtool.domain.Backlog;
import com.example.pmtool.domain.Project;
import com.example.pmtool.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends CrudRepository<ProjectTask,Integer> {

    List<ProjectTask> findByProjectUUIDOrderByPriority(String projectUUID);

    ProjectTask findByProjectSequence(String projectSequence);

    /// COUNT TOTAL PROJECT TASK




}
