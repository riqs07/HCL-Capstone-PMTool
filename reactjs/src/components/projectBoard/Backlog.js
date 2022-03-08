import React from 'react';
import ProjectTask from "./tasks/ProjectTask";

const Backlog = ({projectTasks}) => {


    const toDoTasks = projectTasks.filter(task => task.status === "0");
    const activeTasks = projectTasks.filter(task => task.status === "1");
    const completedTasks = projectTasks.filter(task => task.status === "2");

    let toDoCount = 0;
    let activeCount = 0;
    let completedCount = 0;


    toDoTasks.forEach(x => toDoCount++)
    activeTasks.forEach(x =>activeCount)
    completedTasks.forEach(x => completedCount++)



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className=" text-center mb-2">
                        <div className="p-2 rounded bg-slate-600 text-slate-200">
                            <h3>TO DO {toDoCount}</h3>
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
                    <div className=" text-center mb-2">
                        <div className="p-2 rounded bg-slate-600 text-slate-200">
                            <h3>Active {activeCount}</h3>
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
                    <div className=" text-center mb-2">
                        <div className="p-2 bg-slate-600 rounded text-slate-200">
                            <h3>Done {completedCount}</h3>

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
