import axios from "axios"
import { GET_ERRORS , GET_PROJECTS,GET_PROJECT,UPDATE_PROJECT} from "./types"


/// POST PROJECT 
export const createProject = (project, nav) => async dispatch => {


    try {
        
        const res = await axios.post("http://localhost:8080/api/project", project)
        nav("/dashboard")
     
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}


export const updateProject = (project, nav) => async dispatch => {


    try {
        
        const res = await axios.put("http://localhost:8080/api/project", project)
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

export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/project/all")
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    })
}

export const getProject = (id,nav) => async dispatch => {


    try {
        

    const res = await axios.get(`http://localhost:8080/api/project/${id}`)
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
