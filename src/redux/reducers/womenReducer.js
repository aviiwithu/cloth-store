import {FETCH_WOMEN} from '../constants/index';
const initialState={
    loading:false,
    error:null,
    heroImage:null,
    product:null
    }
    export const womenReducer=(state=initialState,action)=>{
        switch (action.type) {
            case FETCH_WOMEN:
                return {
                    ...state,
                    product:action.data
                }
            default:
                return state;
        }
    
    }