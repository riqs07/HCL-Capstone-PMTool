import React from 'react';
import ProjectTask from "./tasks/ProjectTask";

const Backlog = ({projectTasks}) => {


    const taskList = projectTasks.map(task => (
        <ProjectTask key = {task.id} projectTask={task} />
    ))



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white">
                            <h3>TO DO</h3>
                        </div>
                    </div>


                    {taskList}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-primary text-white">
                            <h3>In Progress</h3>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-success text-white">
                            <h3>Done</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Backlog;
