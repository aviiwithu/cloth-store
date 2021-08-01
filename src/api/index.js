import axios from 'axios';

const API = axios.create({baseURL:"https://cloth-store-node.herokuapp.com/api"});
// const API = axios.create({baseURL:"http://localhost:5000/api"});


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
export const getHomeproducts =()=>API.get('/products/home')