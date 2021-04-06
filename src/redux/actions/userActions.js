
import * as api from '../api/index';
import {GET_ALL_USERS,GET_ALL_USERS_SUCCESS,GET_ALL_USERS_FAILED} from '../constants/actionTypes'

export const getAllUsers=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_ALL_USERS});
        const {data} = await api.getAllusers();
        dispatch({type:GET_ALL_USERS_SUCCESS, payload:data});
    } catch (error) {
        dispatch({type:GET_ALL_USERS_FAILED, payload:error.message})
    }
}