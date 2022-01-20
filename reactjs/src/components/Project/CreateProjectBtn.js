import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateProjectBtn() {
    return (
        <>
            <Link to="/addProject" className="btn btn-lg btn-info">
                Create a Projectss
                </Link>
        </>
    )
}
