import axios from "axios";


export const addProjectTask = (projectUUID,projectTask, nav) => async dispatch => {
    await axios.post(`/api/backlog/${projectUUID}`,projectTask)
    nav.push(`/projectBoard${projectUUID}`)
}