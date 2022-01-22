import React ,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {getProject} from "../../repository/projectActions"
import { useParams } from 'react-router';


const UpdateProject = ({getProject}) => {


  
    const nav = useNavigate()
    const {id} = useParams()

    console.log(id)
    // componentDidMount
    useEffect(() => {
        getProject(id,nav);

        },[])


    return (
        <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Edit Project form</h5>
                    <hr />
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " placeholder="Project Name" />
                        </div>

                         <div className="form-group">
                            <textarea disabled className="form-control form-control-lg" placeholder="Project Identifier"></textarea>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Project Description"></textarea>
                        </div>

                       
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="start_date" />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="end_date" />
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
    getProject:PropTypes.func.isRequired,
    project:PropTypes.object.isRequired
  }
  
  
//   const mapStateToProps = state => ({
//     project:state.project.project
//   })
  
  export default connect(null,{getProject}) (UpdateProject)