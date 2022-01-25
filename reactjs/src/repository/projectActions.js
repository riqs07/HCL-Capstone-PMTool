import axios from "axios"
import { GET_ERRORS , GET_PROJECTS,GET_PROJECT,UPDATE_PROJECT,DELETE_PROJECT} from "./types"


/// POST PROJECT 
export const createProject = (project, nav) => async dispatch => {
    try {
        const res = await axios.post("/api/project", project)
        nav("/dashboard")
     
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

/// PUT Project
export const updateProject = (project, nav) => async dispatch => {
    try {
        
        const res = await axios.put("/api/project", project)
        nav("/dashboard")
        
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

// GET ALL PROJECTS
export const getProjects = () => async dispatch => {
    const res = await axios.get("/api/project/all")
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    })
}

// GET ONE PROJECT
export const getProject = (id,nav) => async dispatch => {
    try {
    const res = await axios.get(`/api/project/${id}`)
    dispatch({
        type: GET_PROJECT,
        payload: res.data
    })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        nav("/dashboard")
    }
}

// DELETE PROJECT
export const deleteProject = (id) => async dispatch => {

    
    if (
        window.confirm("Are you sure? this will delete all your data")
    ) {

        await axios.delete(`/api/project/${id}`)
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        })
    
    }

  
}

