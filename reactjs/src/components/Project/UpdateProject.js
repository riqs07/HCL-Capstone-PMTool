import React ,{useEffect,useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from "prop-types"
import {connect, useStore, useDispatch} from "react-redux"
import {getProject, updateProject} from "../../repository/projectActions"
import { useParams } from 'react-router';


const UpdateProject = ({project,getProject,updateProject}) => {
    const nav = useNavigate()
    const {id} = useParams()


            const [dbID,setDBID] = useState("");
            const [projectName, setName] = useState("");
            const [projectUUID, setUUID] = useState("");
            const [description, setDesc] = useState("");
            const [start_date, setStartDate] = useState("");
            const [end_date, setEndDate] = useState("");
        


    useEffect(() => {

        
        // componentDidMount
    
            // On load process GET REQUEST
            // USING ID PARAM s
           getProject(id,nav)
         
           // STORE GET Response in Redux store
      
         
            },[])
    
    

            // WHen project loads in set name
          useEffect(() => {
            setDBID(project.id)
             setName(project.projectName)
             setDesc(project.description)
             setUUID(project.projectUUID)
             setStartDate(project.start_date)
             setEndDate(project.end_date)
          }, [project])

        
           
    






    const onSubmit = (e) => {
        e.preventDefault();
    
        const requestBody =  {
                       "id": dbID,
                        projectName,
                         projectUUID,
                         description,
                         start_date,
                         end_date }

    
          updateProject(requestBody,nav)
                         
    }
   
   
   
        return (

        <div className="project">
  
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Edit Project form</h5>
                    <hr />
                    <form onSubmit = {onSubmit} >
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " value={projectName}  onChange = {(e) => setName(e.target.value)} />
                        </div>

                         <div className="form-group">
                            <textarea className="form-control form-control-lg" disabled value={projectUUID} onChange = {(e) => setUUID(e.target.value)} ></textarea>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" value={description} onChange = {(e) => setDesc(e.target.value)}></textarea>
                        </div>

                       
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="start_date" value={start_date} onChange = {(e) => setStartDate(e.target.value)} />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="end_date" value={end_date} onChange = {(e) => setEndDate(e.target.value)} />
                        </div> 

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )


      
}

UpdateProject.propTypes = {
    updateProject:PropTypes.func.isRequired,
    project:PropTypes.object.isRequired
  }
  
  
  const mapStateToProps = state => ({
    project:state.project.project
  })
  
  export default connect(mapStateToProps,{updateProject,getProject}) (UpdateProject)