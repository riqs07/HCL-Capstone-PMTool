import {GET_PROJECTS} from '../repository/types';



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

        default:
        return state;

    }
}