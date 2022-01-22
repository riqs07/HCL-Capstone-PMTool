import axios from "axios"
import { GET_ERRORS , GET_PROJECTS} from "./types"


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

export const getProjects = () => async dispatch => {
    console.log("ok")
    const res = await axios.get("http://localhost:8080/api/project/all")
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    })
}