import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import { useParams } from 'react-router';
import Backlog from "./Backlog";
import {connect} from "react-redux"
import {getBacklog} from "../../repository/backlogActions";

const ProjectBoard = ({backlog,getBacklog,errors}) => {

    const {id} = useParams()
    const [currErrors, setCurrErrors] = useState({});

    const taskList = Array.from(backlog.project_tasks);


    useEffect(() => {
        getBacklog(id);
    }, [])

    useEffect(() => {
        setCurrErrors(errors);
    }, [errors])



    let BoardContent;

    /// Checks to see if project is valid 1st if not give error
    const BoardAlgo = (errors,taskList) => {
        if(taskList.length < 1){
            if(errors.projectNotFound){
                return(
                    <div className="alert alert-danger text-center" role="alert">
                        {errors.projectNotFound}
                    </div>
                )
            } else {
                return(
                    <div className="alert alert-info text-cent" role="alert">
                        No Project Tasks on This Board
                    </div>
                )
            }
        } else {
            return(
                <Backlog projectTasks={taskList}/>
            )
        }
    }

    BoardContent= BoardAlgo(errors, taskList);




    return (
        <div className="mx-4">
            <Link to={`/addProjectTask/${id}`}  className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>

            {BoardContent}

</div>

    );
};





ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    backlog: state.backlog,
    errors: state.errors
})

export default connect(mapStateToProps, {getBacklog}) (ProjectBoard)