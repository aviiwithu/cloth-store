import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED,
CREATE_NEW_PRODUCT_PENDING, CREATE_NEW_PRODUCT_SUCCESS, CREATE_NEW_PRODUCT_FAILED,
DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAILED, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILED

} from '../constants/actionTypes';
import * as api from '../api/index'

export const getAllProducts = ()=>async(dispatch)=>{
    try {
        dispatch({type:FETCH_PRODUCTS_PENDING})
        const {data} = await api.getAllProducts();
        dispatch({type:FETCH_PRODUCTS_SUCCESS, payload:data});
                
    } catch (error) {
        dispatch({type:FETCH_PRODUCTS_FAILED, payload: error.message})
    }
}

export const createProduct=(productData)=> async(dispatch)=>{
    try {
        dispatch({type:CREATE_NEW_PRODUCT_PENDING});
        const {data} = await api.createProduct(productData)
        dispatch({type:CREATE_NEW_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CREATE_NEW_PRODUCT_FAILED, payload:error.message})
    }
}
export const deleteProduct=(id)=> async(dispatch)=>{
    try {
        await api.deleteProduct(id)
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:id})
    } catch (error) {
        dispatch({type:DELETE_PRODUCT_FAILED})
    }
}

export const updateProduct =(productId,productData)=>async(dispatch)=>{
    try {
        const {data} = await api.updateProductById(productId,productData);
       
        dispatch({type:UPDATE_PRODUCT_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({type:UPDATE_PRODUCT_FAILED, payload:error.message});
    }
}