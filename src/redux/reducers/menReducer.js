import {FETCH_MEN} from '../constants/index';

const initialState={
loading:false,
error:null,
heroImage:null,
product:null
}
export const menReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_MEN:
            return {
                ...state,
                product:action.data
            }
        case 'filter':
            return {
                ...state,
                product:state.product.filter(val=>val.price>action.price)
            }
        default:
            return state;
    }

}