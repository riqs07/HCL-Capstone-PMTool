import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {deleteProject} from "../../repository/projectActions"

const ProjectItem = ({project,deleteProject}) => {

    const {projectName, projectUUID,description} = project

    return (
                <div className="container ">
                    <div className="px-6 py-4 rounded my-2 bg-slate-700 text-slate-200">
                        <div className="row ">
                            <div className="col-2">
                                <span className="mx-auto text-4xl">{projectUUID}</span>
                            </div>
                            <div className="col-lg-6 col-md-4 col-8">
                                <h3>{projectName}</h3>
                                <p>{description}</p>
                            </div>
                            <div className=" col-md-4 d-none d-lg-block">
                                <ul className="list-group " >
                                    <a href="#">
                                        <li className="bg-slate-700 text-slate-200 px-4 m-2 board hover:text-blue-500 ">
                                            <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                                        </li>
                                    </a>
                                    <Link to= {`/updateProject/${projectUUID}`}>
                                        <li className="bg-slate-700 text-slate-200 px-4 m-2 hover:text-blue-500 update">
                                            <i className="fa fa-edit pr-1"> Update Project Info</i>
                                        </li>
                                    </Link>
                                        <li onClick = {() => deleteProject(projectUUID)} className="bg-slate-700 text-slate-200 px-4 m-2 hover:text-blue-500 delete">
                                            <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                                        </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}


ProjectItem.propTypes = {
    deleteProject:PropTypes.func.isRequired,
  }

export default connect(null,{deleteProject})(ProjectItem)