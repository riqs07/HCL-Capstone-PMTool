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
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}