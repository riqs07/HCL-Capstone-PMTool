import React from 'react';
import ProjectTask from "./tasks/ProjectTask";

const Backlog = ({projectTasks}) => {


    const toDoTasks = projectTasks.filter(task => task.status === "0");
    const activeTasks = projectTasks.filter(task => task.status === "1");
    const completedTasks = projectTasks.filter(task => task.status === "2");

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white">
                            <h3>TO DO</h3>
                        </div>
                    </div>

                    {toDoTasks.map(task => {
                        return <ProjectTask
                            key={task.id}
                            projectTask={task}
                        />
                    })}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-primary text-white">
                            <h3>In Progress</h3>
                        </div>
                    </div>
                    {activeTasks.map(task => {
                        return <ProjectTask
                            key={task.id}
                            projectTask={task}
                        />
                    })}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-success text-white">
                            <h3>Done</h3>

                        </div>

                    </div>
                    {completedTasks.map(task => {
                        return <ProjectTask
                            key={task.id}
                            projectTask={task}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Backlog;
