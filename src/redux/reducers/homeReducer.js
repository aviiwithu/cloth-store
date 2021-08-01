import {FETCH_HOME} from '../constants/index'

const initialState={
    loading:false,
    error:null,
    product:{
        explore:[],
        trending:[],
        topRated:[]
    },

}
export const homeReducer = (state=initialState,action)=>{
    
    // const {trending, topRated, explore} = action.data;
    
    switch(action.type){
        case FETCH_HOME:
            return {
                ...state,
                product: {
                    trending: action.data.trending,
                    topRated: action.data.topRated,
                    explore: action.data.explore
                }
            }
            
        default:
            return state;
    }
}