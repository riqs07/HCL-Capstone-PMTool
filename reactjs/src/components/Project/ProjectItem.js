import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {deleteProject} from "../../repository/projectActions"

const ProjectItem = ({project,deleteProject}) => {

    const {projectName, projectUUID,description} = project

    return (
                <div className="container  py-1  hover:scale-110 md:w-32 lg:w-48 ">
                    <div className="px-6 py-4 rounded my-2 bg-slate-700 text-slate-200 hover:text-blue-500">
                        <div className="row ">
                            <div className="col-2 align-middle">
                                <span className="mx-auto text-4xl text-blue-500">{projectUUID}</span>
                            </div>
                            <div className="col-lg-6 col-md-4 col-8 text-center">
                                <p class = "mb-4 text-3xl font-bold">{projectName}</p>
                                <p class = "text-xl" >{description}</p>
                            </div>
                            <div className=" col-md-4 d-none d-lg-block">
                                <ul className="list-group " >
                                    <a href="#">
                                        <li className="bg-blue-500 text-slate-200 py-2 px-4 rounded m-2 hover:translate-y-1 text-center text-lg">
                                        <i class="fas fa-tasks "> Tasks</i>
                                        </li>
                                    </a>
                                    <Link to= {`/updateProject/${projectUUID}`}>
                                        <li className="border-4 border-blue-500  text-blue-500 py-2 px-4 rounded m-2 hover:translate-y-1 text-center text-lg">
                                            <i className="fa fa-edit pr-1"> Edit</i>
                                        </li>
                                    </Link>
                                        <li onClick = {() => deleteProject(projectUUID)} className=" border-4 border-red-500 text-red-500 py-2 px-4 rounded m-2 hover:translate-y-1 text-center text-lg">
                                        <i class="far fa-trash-alt "></i>
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