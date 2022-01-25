import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateProjectBtn() {
    return (
        <>
            <Link to="/addProject" className="bg-blue-500 hover:bg-blue-700 text-slate-200 font-bold py-2 px-4 rounded">
              <i class="fas fa-plus"/>  
                </Link>
        </>
    )
}
