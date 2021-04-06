import {GET_ALL_USERS, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILED} from '../constants/actionTypes';

const initialState={
    users:[],
    loading:false,
    error:null
}

export const userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                loading:true
            }
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                users:action.payload,
                loading:false
            }
        case GET_ALL_USERS_FAILED:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
           return state;
    }
}