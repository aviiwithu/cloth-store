import React,{useEffect,useState} from 'react';
import {IconButton ,CircularProgress, Dialog,DialogTitle,TextField,Button, } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import {useDispatch, useSelector} from 'react-redux';
import{ getAllProducts,createProduct, deleteProduct, updateProduct } from '../redux/actions/productActions';
import ProductTable from './Table';

const Product =()=> {
    const dispatch = useDispatch();
    const allProducts = useSelector((state)=> state.products.products);
    const [productData,setProductData] = useState({name:'',category:'',subCategory:'',image:'',thumbImage:'',color:'',size:'',price:'',description:''});
    const [productId, setProductId] = useState(0);
    const editProduct = allProducts.find((item)=>item._id=== productId);

    useEffect(()=>{
      dispatch(getAllProducts());
      if(editProduct) setProductData(editProduct);// eslint-disable-next-line
  },[dispatch,productId]);

  const handleChange=(e)=>{
    setProductData({...productData,[e.target.name]:e.target.value});
  }
  const clear=()=>{
      setProductData({name:'',category:'',subCategory:'',image:'',thumbImage:'',color:'',size:'',price:'',description:''});
      setProductId(0);
  }
  const handleSubmit=()=>{
      if(productId){
          dispatch(updateProduct(productId, productData));
      } else {
          dispatch(createProduct(productData));
      }
      clear();
      setIsOpen(!isOpen);
    
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
      <>     

        <Dialog  open={isOpen} fullWidth >
         <DialogTitle >
             Add product
         </DialogTitle>
         
             <TextField variant="outlined" placeholder="product name" name="name" size="small" onChange={handleChange} value={productData.name} />
              <TextField variant="outlined" placeholder="category" name="category" size="small" onChange={handleChange} value={productData.category}  />
              <TextField variant="outlined" placeholder="sub-category" name="subCategory" size="small" onChange={handleChange} value={productData.subCategory}  />
              <TextField variant="outlined" placeholder="image" size="small" name="image" onChange={handleChange} value={productData.image}  />
              <TextField variant="outlined" placeholder="thumbImage" size="small" name="thumbImage" onChange={handleChange} value={productData.thumbImage}  />
              <TextField variant="outlined" placeholder="color" size="small" name="color" onChange={handleChange} value={productData.color}  />
              <TextField variant="outlined" placeholder="size" size="small" name="size" onChange={handleChange} value={productData.size}  />
              <TextField variant="outlined" placeholder="price" size="small" name="price" onChange={handleChange} value={productData.price}  />
              <TextField variant="outlined" placeholder="description" size="small" name="description" onChange={handleChange} value={productData.description}  />
              <div style={{margin:'auto'}} >
                <Button onClick={handleSubmit} variant="outlined" >
                    {productId?"Edit":"Add"} <AddIcon type='submit'  className={productId?"edit":"add"} /> 
                </Button>
                <Button onClick={()=>clear()}  >
                    Clear  
                </Button>
                <IconButton onClick={()=>setIsOpen(!isOpen)} >
                    <CloseIcon  /> 
                </IconButton>
              </div>
          
        </Dialog >      
          
          <Button className={productId?"edit":"add"} onClick={()=>setIsOpen(!isOpen)}  >{productId?"Edit":"Add"} <AddIcon/> </Button>

          {!allProducts?<CircularProgress/>:<ProductTable products={allProducts} setProductId={setProductId} openModal={setIsOpen} deleteProduct={deleteProduct} />}

        
    
    </>
  );
}

export default Product;