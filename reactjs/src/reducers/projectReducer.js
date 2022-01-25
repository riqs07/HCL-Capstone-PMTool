import {GET_PROJECTS, GET_PROJECT,DELETE_PROJECT} from '../repository/types';



const initialState = {
    projects:[],
    project:{}
};

export default (state = initialState,action) => {
    switch(action.type){
       
        case GET_PROJECTS:
        return {
            ...state,
            projects:action.payload
        }

        case GET_PROJECT:
        return {
            ...state,
            project:action.payload
        }



        case DELETE_PROJECT:
        return {
            ...state,
            projects:state.projects.filter(project => project.projectUUID !== action.payload)
        }

        default:
        return state;

    }
}