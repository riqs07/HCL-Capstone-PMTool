import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ProjectTask = ({projectTask}) => {

    const {projectSequence, priority, summary, acceptanceCriteria} = projectTask;

    let priorityString;
    let priorityClass;

    if (projectTask.priority === 1) {
        priorityClass = "bg-yellow-800 ";
        priorityString = "HIGH";
    }

    if (projectTask.priority === 2) {
        priorityClass = "bg-emerald-800";
        priorityString = "MEDIUM";
    }

    if (projectTask.priority === 3) {
        priorityClass = "bg-sky-800";
        priorityString = "LOW";
    }


    const [formData, setRequestBody] = useState();

    const [hover,setHover] = useState(false);


    const handleHover = () => {
        if (hover){
            setHover(false)
        } else {
            setHover(true)
        }

    }

    return (
        <div onMouseOver = {()=>setHover(true)} onMouseLeave = {()=>setHover(false)} className={`rounded m-2 px-1 ${priorityClass}  text-slate-200 hover:scale-125`}>

            <div className={` ${priorityClass} rounded-t text-lg font-bold px-3 py-2`}>

            {hover && 
            priorityString +'    ' + 
            projectSequence 
        }
            
   
                
            </div>
            <div className="card-body flex ">
            <div className= "carrdbody">
                <h4 >{summary}</h4>
                <p className="card-text text-truncate ">
                  {acceptanceCriteria}
                </p>
            </div>

{hover &&
    <div class = "action-buttons justify-items-end p-3 rounded">
    <Link to ={"#"} className="text-slate-200 text-2xl mx-2">
                            <i class="fas fa-pen-square"></i> 
    </Link>

    <button className="  text-slate-200  text-2xl  mx-2">
    <i class="fas fa-calendar-times"></i>                    </button>


    <button className=" text-slate-200  text-2xl  mx-2">
    <i class="fas fa-calendar-check"></i>                    </button>

    
    </div>
}
              



            </div>
        </div>
    );
};

export default ProjectTask;
