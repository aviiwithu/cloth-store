import axios from 'axios';

const API = axios.create({baseURL:"https://cloth-store-node.herokuapp.com/api"});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('user')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
    return req;
});

export const getAllProducts =()=> API.get('/products');
export const getOneProduct=(id)=>API.get(`/products/${id}`,{id});
export const getProductByCategory=(category)=>API.get(`/products/category/${category}`,{category});
export const getProductBySubCategory=(category,subCategory)=>API.get(`/products/category/${category}/${subCategory}`,{category,subCategory});

export const createProduct=(newProduct)=>API.post(`/products`, newProduct);
export const deleteProduct=(id)=>API.delete(`/products/${id}`, {id});
export const getAllusers=()=>API.get(`/user`);
export const updateProductById =(productId,productData)=> API.patch(`/products/${productId}`, productData);