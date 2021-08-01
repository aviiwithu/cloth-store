import * as api from '../../api';
import{FETCH_MEN, FETCH_WOMEN,FETCH_CHILDREN, FETCH_HOME} from '../constants/index';

export const getHomeproducts = ()=>async(dispatch)=>{
    try {
        const {data} = await api.getHomeproducts();
        dispatch({type: FETCH_HOME, data: data.data})
    } catch (error) {
        console.log(error.message)
    }
}

export const getMenProducts = ()=>async(dispatch)=>{
    try {
        const {data} = await api.getProductByCategory("men");
        dispatch({type:FETCH_MEN,data:data.data})
    } catch (error) {
        console.log(error.message);
    }
}

export const getWomenProducts = ()=>async(dispatch)=>{
    try {
        const {data} = await api.getProductByCategory("women");
        dispatch({type:FETCH_WOMEN,data:data.data})
    } catch (error) {
        console.log(error.message);
    }
}

export const getChildrenProducts =()=>async(dispatch)=>{
    try {
        const {data} = await api.getProductByCategory("children");
        dispatch({type:FETCH_CHILDREN,data:data.data})
    } catch (error) {
        console.log(error.message);
    }
}

export const signIn =()=>async(dispatch)=>{
    try {
        console.log("processing sign in");
    } catch (error) {
        console.log(error.message);
    }
}

export const signUp =()=>async(dispatch)=>{
    try {
        console.log("sign up in process");
    } catch (error) {
        console.log(error.message);
    }
}