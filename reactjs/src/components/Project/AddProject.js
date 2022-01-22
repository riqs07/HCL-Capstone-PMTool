import React, { useState ,useEffect } from 'react'
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createProject} from "../../repository/projectActions"
import { useNavigate } from 'react-router-dom'


const AddProject = ({createProject,errors}) => {

    let nav = useNavigate()

    const [projectName, setName] = useState("");
    const [projectUUID, setUUID] = useState("");
    const [description, setDesc] = useState("");
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [responseErrors, setErrors] = useState()

    /// Prepares and Sends Object to Repository Layer 
    const onSubmit = (e) => {
        e.preventDefault();

        const requestBody =  {projectName,
                         projectUUID,
                         description,
                         start_date,
                         end_date }

    
          createProject(requestBody,nav)
                         
    }


    useEffect(() => {
      if(errors){
        console.log(errors)
        setErrors(errors)
      }
    })


    return (


<div className="w-full max-w-xs">
<h1>{errors}</h1>

  <form className="bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit = {onSubmit}>
    <div className="mb-4">
      <label className="block text-slate-200 text-sm font-bold mb-2" htmlFor="projectName">
        Project Name
      </label>
      <input className=" appearance-none border rounded w-full py-2 px-3 text-slate-200 leading-tight focus:outline-none focus:shadow-outline" id="projectName" type="text" placeholder = "Enter Project Name" value = {projectName} onChange = {(e) => setName(e.target.value)} />
    </div>

    <div className="mb-6">
      <label className="block text-slate-200 text-sm font-bold mb-2" htmlFor="password">
        Project Identifier 
      </label>
      <input className=" bg-slate-700 appearance-none border border-red-500 rounded w-full py-2 px-3 text-slate-200 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="projectUUID" type="text" placeholder  = "Between 4-5 charecters"  value = {projectUUID} onChange = {(e) => setUUID(e.target.value)}/>
    </div>

     <div className="mb-4">
      <label className="block text-slate-200 text-sm font-bold mb-2" htmlFor="username">
        Project Desciription.
      </label>
      <textarea className=" bg-slate-700 appearance-none border rounded w-full py-2 px-3 text-slate-200 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter project details" value = {description} onChange = {(e) => setDesc(e.target.value)}/>
    </div>

<div className="flex items-center justify-center">
  <div className="datepicker relative form-floating mb-3 xl:w-96">
    <input type="date"
      className="bg-slate-700 form-control block w-full px-3 py-1.5 text-base font-normal text-slate-200 bg-white bg-clip-padding border border-solid border-slate-200 rounded transition ease-in-out m-0 focus:text-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date"  value = {start_date} onChange = {(e)=>setStartDate(e.target.value)}/>
    <label htmlFor="floatingInput" className="text-slate-700">Select a Start date</label>
  </div>
</div>

<div className="flex items-center justify-center">
  <div className="datepicker relative form-floating mb-3 xl:w-96">
    <input type="date"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-200 bg-white bg-clip-padding border border-solid border-slate-200 rounded transition ease-in-out m-0 focus:text-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" value = {end_date} onChange = {(e) => setEndDate(e.target.value)} />
    <label htmlFor="floatingInput2" className="text-slate-700">Select an End date</label>
  </div>
</div>
   

    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
        Submit
      </button>
      <button type="button" className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
        Clear 
      </button>
    </div>
  </form>
  
</div>
        // <div className="project">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-8 m-auto">
        //                 <h5 className="display-4 text-center">Create / Edit Project form</h5>
        //                 <hr />
        //                 <form onSubmit = {onSubmit}>
        //                     <div className="form-group">
        //                         <input type="text" className="form-control form-control-lg " placeholder="Project Names" name="projectName"  value = {name} onChange = {(e) => setName(e.target.value)}/>
        //                     </div>

        //                     <div className="form-group">
        //                         <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID" name="projectUUID"  value = {projectUUID} onChange = {(e) => setUUID(e.target.value)}/>
        //                     </div>
        //                     <div className="form-group">
        //                         <textarea className="form-control form-control-lg" placeholder="Project Description" name="description" value = {description} onChange = {(e) => setDesc(e.target.value)}></textarea>
        //                     </div>
        //                     <h6>Start Date</h6>
        //                     <div className="form-group">
        //                         <input type="date" className="form-control form-control-lg" name="start_date" value = {start_date} onChange = {(e)=>setStartDate(e.target.value)} />
        //                     </div>
        //                     <h6>Estimated End Date</h6>
        //                     <div className="form-group">
        //                         <input type="date" className="form-control form-control-lg" name="end_date" value = {end_date} onChange = {(e) => setEndDate(e.target.value)} />
        //                     </div> 

        //                     <input type="submit" className="btn btn-primary btn-block mt-4" />
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
            
        // </div>



    )
}

AddProject.propTypes = {
  createProject:PropTypes.func.isRequired,
  errors:PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  errors:state.errors
})

export default connect(mapStateToProps,{createProject}) (AddProject)
