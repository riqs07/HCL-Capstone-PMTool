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

<div class="w-full max-w-xs">
  <form class="bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit = {onSubmit}>
    <div class="mb-4">
      <label class="block text-slate-200 text-sm font-bold mb-2" for="projectName">
        Project Name
      </label>
      <input class=" appearance-none border rounded w-full py-2 px-3 text-slate-200 leading-tight focus:outline-none focus:shadow-outline" id="projectName" type="text" placeholder = "Enter Project Name" value = {name} onChange = {(e) => setName(e.target.value)} />
    </div>

    <div class="mb-6">
      <label class="block text-slate-200 text-sm font-bold mb-2" for="password">
        Project Identifier 
      </label>
      <input class=" bg-slate-700 appearance-none border border-red-500 rounded w-full py-2 px-3 text-slate-200 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="projectUUID" type="text" placeholder  = "Between 4-5 charecters"  value = {projectUUID} onChange = {(e) => setUUID(e.target.value)}/>
    </div>

     <div class="mb-4">
      <label class="block text-slate-200 text-sm font-bold mb-2" for="username">
        Project Desciription.
      </label>
      <textarea class=" bg-slate-700 appearance-none border rounded w-full py-2 px-3 text-slate-200 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter project details" value = {description} onChange = {(e) => setDesc(e.target.value)}/>
    </div>

<div class="flex items-center justify-center">
  <div class="datepicker relative form-floating mb-3 xl:w-96">
    <input type="date"
      class="bg-slate-700 form-control block w-full px-3 py-1.5 text-base font-normal text-slate-200 bg-white bg-clip-padding border border-solid border-slate-200 rounded transition ease-in-out m-0 focus:text-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date"  value = {start_date} onChange = {(e)=>setStartDate(e.target.value)}/>
    <label for="floatingInput" class="text-slate-700">Select a Start date</label>
  </div>
</div>

<div class="flex items-center justify-center">
  <div class="datepicker relative form-floating mb-3 xl:w-96">
    <input type="date"
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-200 bg-white bg-clip-padding border border-solid border-slate-200 rounded transition ease-in-out m-0 focus:text-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" value = {end_date} onChange = {(e) => setEndDate(e.target.value)} />
    <label for="floatingInput2" class="text-slate-700">Select an End date</label>
  </div>
</div>
   

    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
        Submit
      </button>
      <button type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
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

export default AddProject
