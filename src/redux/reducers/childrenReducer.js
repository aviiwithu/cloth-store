import {FETCH_CHILDREN} from '../constants/index';
const initialState={
    loading:false,
    error:null,
    heroImage:null,
    product:null
    }
    export const childrenReducer=(state=initialState,action)=>{
        switch (action.type) {
            case FETCH_CHILDREN:
                return {
                    ...state,
                    product:action.data
                }
            default:
                return state;
        }
    
    }