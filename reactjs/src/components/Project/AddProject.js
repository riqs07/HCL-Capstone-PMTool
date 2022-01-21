import React, { useState } from 'react'



const AddProject = () => {


    const [name, setName] = useState();
    const [projectUUID, setUUID] = useState();
    const [description, setDesc] = useState();
    const [start_date, setStartDate] = useState();
    const [end_date, setEndDate] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        const request =  {name,
                         projectUUID,
                         description,
                         start_date,
                         end_date }

    
        
        console.log(request);
      
    }

    return (



        <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Project form</h5>
                        <hr />
                        <form onSubmit = {onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " placeholder="Project Names" name="projectName"  value = {name} onChange = {(e) => setName(e.target.value)}/>
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID" name="projectUUID"  value = {projectUUID} onChange = {(e) => setUUID(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" placeholder="Project Description" name="description" value = {description} onChange = {(e) => setDesc(e.target.value)}></textarea>
                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="start_date" value = {start_date} onChange = {(e)=>setStartDate(e.target.value)} />
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="end_date" value = {end_date} onChange = {(e) => setEndDate(e.target.value)} />
                            </div> 

                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProject
