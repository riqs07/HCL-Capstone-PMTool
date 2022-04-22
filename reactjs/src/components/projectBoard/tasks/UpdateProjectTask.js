import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link, useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import {getProjectTask,updateProjectTask} from "../../../repository/backlogActions";
import {connect} from "react-redux";


const UpdateProjectTask = ({project, updateProjectTask, getProjectTask, errors}) => {


    const nav = useNavigate()
    const {id,pt_id} = useParams()

    const {priority, status,summary,} = project;



    // set Form
    const [formData, setFormData] = useState("");


    // Make API Request to fill in data based on uuid
    useEffect(() => {
      getProjectTask(id,pt_id)
    }, [])

    // fill in inputs with received data
    useEffect(()=>{

        setFormData(project)
        // let dateString = new Date(formData.dueDate).toISOString().slice(0, 10)


    }, [project])


    // controlled inputs
    const onChange = e => {
        const {name, value} = e.target;
        const updatedForm = {
            ...formData,
            [name]:value
        }
        setFormData(updatedForm)


    }

    // update task on form submission
    const onSubmit = (e) => {
        e.preventDefault();
        updateProjectTask(id, pt_id,formData,nav)


    }


    return (
        <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to = {`/projectBoard/${id}`} className="btn btn-light">
                            Back to Project Board
                        </Link>
                        <h4 className="display-4 text-center text-slate-200">Update Task </h4>
                        <h5 className="text-center text-slate-200">{id} + {pt_id}</h5>

                        <h6 className = "text-slate-200">Summary</h6>

                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="text" className= "form-control form-control-lg"
                                       name="summary"
                                       placeholder="Project Task summary"
                                       value={formData.summary}
                                       onChange={onChange}/>
                            </div>

                            <h6 className = "text-slate-200">Acceptance Criteria</h6>

                            <div className="form-group">
                                <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria" value={formData.acceptanceCriteria} onChange={onChange}/>
                            </div>
                            <h6 className = "text-slate-200">Due Date</h6>




                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="dueDate" value={formData.dueDate} onChange={onChange}/>
                            </div>
                            <h6 className = "text-slate-200">Priority</h6>

                            <div className="form-group">
                                <select className="form-control form-control-lg" name="priority" value={formData.priority} onChange={onChange} >
                                    <option value={0}>Select Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                            </div>

                            <h6 className = "text-slate-200">Status</h6>

                            <div className="form-group">
                                <select className="form-control form-control-lg" name="status" value={formData.status} onChange={onChange} >
                                    <option value="">Select Status</option>
                                    <option value="0">TO DO</option>
                                    <option value="1">ACTIVE</option>
                                    <option value="2">DONE</option>
                                </select>
                            </div>

                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


UpdateProjectTask.propTypes = {

    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project: state.backlog.project_task,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    {updateProjectTask, getProjectTask}
) (UpdateProjectTask)