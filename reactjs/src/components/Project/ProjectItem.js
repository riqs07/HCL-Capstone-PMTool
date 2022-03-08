import React ,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types"
import {connect} from "react-redux"
import axios from "axios"

import {deleteProject,countProjectTasks} from "../../repository/projectActions"

const ProjectItem = ({project,deleteProject,countProjectTasks}) => {

    const {projectName, projectUUID,description} = project


    const [tasksTotal,setTaskTotal] = useState(0)

    useEffect(() => {

        const fetchData = async () => {
            const data = await countProjectTasks(projectUUID);
        setTaskTotal(data)
        }

        fetchData();
        
    }, [])

    return (
                <div className="container  py-1  hover:scale-110 md:w-32 lg:w-48 ">
                <Link style={{ textDecoration: 'none' }} to= {`/projectBoard/${projectUUID}`}>
                    <div className="px-6 py-4 rounded my-2 bg-slate-700 text-slate-200 hover:text-blue-500">
                        <div className="row ">
                            <div className="col-2 align-middle">
                                <span className="mx-auto text-4xl text-blue-500">{projectUUID}</span>
                            </div>
                            <div className="col-lg-6 col-md-4 col-8 text-center">
                                <p class = "mb-5 text-4xl font-bold">{projectName}</p>
                                <p class = "text-xl" >{description}</p>
                            </div>
                            <div className=" col-md-4 d-none d-lg-block">
                                <ul className="" >

                                <div className = "flex">

                            <li className=" text-blue-500 py-2 px-3 m-1 rounded hover:scale-125 text-center text-2xl">
                                        <i class="fas fa-check-square"></i> {tasksTotal}
                                        </li>  
                                         

                                                                        
                                    <Link  to= {`/updateProject/${projectUUID}`}> 
                                        <li className=" text-green-500 py-2 px-3 m-1 rounded hover:scale-125 text-center text-2xl">
                                        <i class="fas fa-pen-square"></i> 
                                        </li>
                                    </Link>


                                        <li onClick = {() => deleteProject(projectUUID)} className=" text-red-500 py-2 px-3 m-1 rounded hover:scale-125 text-center text-2xl">
                                        <i class="far fa-trash-alt "></i> 
                                        </li>
                                </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </Link>   
                </div>
    )
}


ProjectItem.propTypes = {
    deleteProject:PropTypes.func.isRequired,
  }

export default connect(null,{deleteProject,countProjectTasks})(ProjectItem)