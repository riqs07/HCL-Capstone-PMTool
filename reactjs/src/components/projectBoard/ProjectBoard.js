import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import { useParams } from 'react-router';
import Backlog from "./Backlog";


const ProjectBoard = ({}) => {

    const {id} = useParams()
    console.log(id)

    return (
        <div className="container">
            <Link to={`/addProjectTask/${id}`}  className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
    <br />
    <hr />

            <Backlog/>

</div>

    );
};

ProjectBoard.propTypes = {
    
};

export default ProjectBoard;
