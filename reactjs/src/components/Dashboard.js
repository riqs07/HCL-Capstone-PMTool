import React,{useEffect} from 'react'
import ProjectItem from './Project/ProjectItem'
import CreateProjectBtn from './Project/CreateProjectBtn'
import { connect } from "react-redux"
import { getProjects } from "../repository/projectActions"
import PropTypes from "prop-types"




const Dashboard = ({ project,getProjects}) => {

    const test = {
        projectName:"ProjectName",
        projectUUID:"Prop",
        description:"desc"
    }

    /// Empty Array Means it will only run once at mounting
    // == componentWillMount
    useEffect(() => {
        getProjects();

        },[])


        const {projects} = project;
        console.log(projects) 

    return (
       
    <div className="projects">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />
                <CreateProjectBtn/>
                <br />
                <hr />
                

                {projects.map(p => (
                    <ProjectItem key = {p.id} project = {p}/>
                ))}

            </div>
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