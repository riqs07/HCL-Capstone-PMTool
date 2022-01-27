import React,{useEffect} from 'react'
import ProjectItem from './Project/ProjectItem'
import CreateProjectBtn from './Project/CreateProjectBtn'
import { connect } from "react-redux"
import { getProjects } from "../repository/projectActions"
import PropTypes from "prop-types"

import { ToastContainer } from 'react-toastify';



const Dashboard = ({ project,getProjects}) => {


    /// Empty Array Means it will only run once at mounting
    // == componentWillMount
    useEffect(() => {
        getProjects();

        },[])


        const {projects} = project;

    return (
       
    <div className="projects container">
        <div className="row">
            <div className="col-md-12">
            
<div class = "dashboard container">
<div class = "px-6 py-4 rounded my-2 bg-slate-700 text-slate-200  ">
            <h1 class = "pb-1 text-center">Project Dashboard</h1>

                   <CreateProjectBtn/>
            <button className="bg-blue-500 text-slate-200 font-bold py-2 px-4 rounded m-4 hover:translate-y-1"> View Tasks
                </button>

                <button className="bg-blue-500 text-slate-200 font-bold py-2 px-4 rounded m-4 hover:translate-y-1"> Total Tasks : 6
                </button>

      <button className="bg-blue-500 text-slate-200 font-bold py-2 px-4 rounded m-4 hover:translate-y-1"> Total Projects : 3
                </button>

                <button className="bg-blue-500 text-slate-200 font-bold py-2 px-4 rounded m-4 hover:translate-y-1"> Task Archive
                </button>



            </div>
</div>
            
                {projects.map(p => (
                    <ProjectItem key = {p.id} project = {p}/>
                ))}

            </div>
            
        </div>
</div>

    )
}


Dashboard.propTypes = {
    project:PropTypes.object.isRequired,
    getProjects:PropTypes.func.isRequired,
  }
  

// Access global store
const mapStateToProps = state => ({
    project:state.project
  })
  

export default connect(mapStateToProps,{getProjects})(Dashboard)