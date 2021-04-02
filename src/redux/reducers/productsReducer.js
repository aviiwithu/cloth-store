import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILED,
    CREATE_NEW_PRODUCT_PENDING,CREATE_NEW_PRODUCT_SUCCESS,CREATE_NEW_PRODUCT_FAILED
 
} from '../constants/actionTypes';

const initialState= {
    products:[],
    loading:false,
    error:null
}
export const getproductsReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state, loading:true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading:false,
                products:action.payload
            }
        case FETCH_PRODUCTS_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case CREATE_NEW_PRODUCT_PENDING:
        return{
            ...state,
            loading:true
        }           
        case CREATE_NEW_PRODUCT_SUCCESS:
        return{
            ...state,
            products:[...state.products,action.payload],
            loading:false
        }
        case CREATE_NEW_PRODUCT_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

  