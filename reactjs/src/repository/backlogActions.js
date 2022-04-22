import axios from "axios";
import {GET_ERRORS, GET_BACKLOG, GET_PROJECT_TASK, DELETE_PROJECT_TASK} from "./types";


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

export const updateProjectTask = (projectUUID,projectSequence,updatedTask, nav) => async dispatch => {

    try {
        await axios.patch(`/api/backlog/${projectUUID}/${projectSequence}`, updatedTask)
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


export const deleteProjectTask = (projectUUID,projectSequence) => async dispatch => {
    if(window.confirm(`Are you sure you want to delete task ${projectSequence}?`)){
        await axios.delete(`/api/backlog/${projectUUID}/${projectSequence}`)
        dispatch({
            type:DELETE_PROJECT_TASK,
            payload:projectSequence
        })
    }
}

export const getProjectTask = (projectUUID, projectSequence, nav) => async dispatch => {

    try {
        const res = await axios.get(`/api/backlog/${projectUUID}/${projectSequence}`)
        dispatch({
            type: GET_PROJECT_TASK,
            payload: res.data
        })
    } catch (e) {
        nav(`/dashboard}`)
    }

}

export const getBacklog = (projectUUID) => async dispatch => {
    try {
        const res = await axios.get(`/api/backlog/${projectUUID}`)
        dispatch({
            type: GET_BACKLOG,
            payload: res.data
        })
    } catch (e) {

    }
}