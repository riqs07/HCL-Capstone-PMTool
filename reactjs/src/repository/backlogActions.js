import axios from "axios";
import {GET_ERRORS} from "./types";


export const addProjectTask = (projectUUID,projectTask, nav) => async dispatch => {



    try {
        await axios.post(`/api/backlog/${projectUUID}`, projectTask)
        nav(`/projectBoard/${projectUUID}`)
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (err) {
        console.log(err.response.data,"hello")
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}