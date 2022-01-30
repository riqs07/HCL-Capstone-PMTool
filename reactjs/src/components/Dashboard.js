import React,{useEffect,useState} from 'react'
import ProjectItem from './Project/ProjectItem'
import CreateProjectBtn from './Project/CreateProjectBtn'
import { connect } from "react-redux"
import { getProjects , sumProjectTasks, sumProjects} from "../repository/projectActions"
import PropTypes from "prop-types"

import { ToastContainer } from 'react-toastify';



const Dashboard = ({ project,getProjects,sumProjectTasks,sumProjects}) => {

    const [tasksSum,setTaskSum] = useState(0)
    const [projectSum,setProjectSum] = useState(0)

    /// Empty Array Means it will only run once at mounting
    // == componentWillMount
    useEffect(() => {
        getProjects();
       
        },[])

        useEffect(() => {
            const fetchData = async () => {
                const data = await sumProjectTasks();
                setTaskSum(data)

                const sum = await sumProjects();
                setProjectSum(sum)
            }
    
            fetchData();           
            },[])
    
    

      


        const {projects} = project;

    return (
       
    <div className="projects container">
        <div className="row">
            <div className="col-md-12">
            
<div class = "dashboard container">
<div class = "px-6 py-4 rounded my-2 bg-slate-700 text-slate-200  ">
            <h2 class = "pb-1 text-center">Project Dashboard</h2>

                   <CreateProjectBtn/>
           

                <p className="bg-blue-500 text-slate-200 font-bold py-2 px-4 rounded m-4 inline-block"> Total Tasks: {tasksSum}
                </p>

      <p className="bg-blue-500 text-slate-200 font-bold py-2 px-4 rounded m-4 inline-block "> Total Projects: {projectSum}
                </p>



                


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
  

export default connect(mapStateToProps,{getProjects,sumProjectTasks,sumProjects})(Dashboard)