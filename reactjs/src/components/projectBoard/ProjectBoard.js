import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import { useParams } from 'react-router';
import Backlog from "./Backlog";
import {connect} from "react-redux"
import {getBacklog} from "../../repository/backlogActions";

const ProjectBoard = ({backlog,getBacklog}) => {

    const {id} = useParams()


    useEffect(() => {
        getBacklog(id);
    }, [])

    const taskList = Array.from(backlog.project_tasks);

    console.log(taskList)


    return (
        <div className="container">
            <Link to={`/addProjectTask/${id}`}  className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
    <br />
    <hr />

            <Backlog projectTasks = {taskList}/>

</div>

    );
};


ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    backlog: state.backlog
})

export default connect(mapStateToProps, {getBacklog}) (ProjectBoard)