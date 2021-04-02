import React,{useEffect,useState} from 'react';
import {IconButton ,Tooltip,CircularProgress, TextField} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import {useDispatch, useSelector} from 'react-redux';
import{ getAllProducts,createProduct } from '../redux/actions/productActions';
import {useLocation} from 'react-router-dom';

export default function CustomizedTables() {
    const dispatch = useDispatch();
    const location = useLocation();
    const allProducts = useSelector((state)=> state.products.products);
  const [product, setproduct] = useState(null);
  const [productData,setProductData] = useState({name:'',category:'',subCategory:'',image:'',thumbImage:'',color:'',size:'',price:'',description:''});

  useEffect(()=>{
      dispatch(getAllProducts());
      setproduct(allProducts);
  },[dispatch]);

  const handleChange=(e)=>{
    setProductData({...productData,[e.target.name]:e.target.value});
    console.log(productData);
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(createProduct(productData));
      
  }

  return (
      <>
      <AddProduct>
          {/* <IconButton onClick={()=> setOpenPopup(true)} >Add Product <AddIcon/> </IconButton> */}
      </AddProduct>           
          <ProductForm onSubmit={handleSubmit} >
              <TextField variant="outlined" placeholder="product name" name="name" size="small" onChange={handleChange} value={productData.name} />
              <TextField variant="outlined" placeholder="category" name="category" size="small" onChange={handleChange} value={productData.category}  />
              <TextField variant="outlined" placeholder="sub-category" name="subCategory" size="small" onChange={handleChange} value={productData.subCategory}  />
              <TextField variant="outlined" placeholder="image" size="small" name="image" onChange={handleChange} value={productData.image}  />
              <TextField variant="outlined" placeholder="thumbImage" size="small" name="thumbImage" onChange={handleChange} value={productData.thumbImage}  />
              <TextField variant="outlined" placeholder="color" size="small" name="color" onChange={handleChange} value={productData.color}  />
              <TextField variant="outlined" placeholder="size" size="small" name="size" onChange={handleChange} value={productData.size}  />
              <TextField variant="outlined" placeholder="price" size="small" name="price" onChange={handleChange} value={productData.price}  />
              <TextField variant="outlined" placeholder="description" size="small" name="description" onChange={handleChange} value={productData.description}  />
              <IconButton type="submit"  >Add Product <AddIcon/> </IconButton>

          </ProductForm>
     
            <Heading >
                <p>Product Name</p>
                <p>category</p>
                <p>sub-Category</p>
                <p>image </p>
                <p>thumbImage </p>
                <p>color </p>
                <p> size</p>
                <p>price </p>
                <p>description </p>
                <p>Action </p>
            </Heading>
        {product?product.map((item)=>(
            <>
            <Products key={item._id} >
                <p  >{item.name} </p>
                <p>{item.category}</p>
                <p>{item.subCategory} </p>
                <img src={item.image} alt=""/>
                <img src={item.thumbImage} alt=""/>
                <p>{item.color} </p>
                <p>{item.size} </p>
                <p>{item.price} </p>
                <p>{item.description}</p>
                <div>
                    <Tooltip title="Edit Product" >
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Product">
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                
                </div>
            </Products>
            </>
        )):<CircularProgress color="inherit" />}
    
    </>
  );
}

const Products= styled.div`
img{
    width:100%;
    max-height:100px;
    object-fit:contain;
}
    display: grid;
    grid-template-columns: 18% 8% 8% 8% 9% 7% 11% 12% 13% auto;
    place-items: center;
    padding:4px;
    text-align:center;
    margin: 3px;
    box-shadow: 0px 1px 0px 0px #b5b5b5;
`
const Heading = styled.div`
    display: grid;
    grid-template-columns: 18% 8% 8% 8% 9% 7% 11% 12% 13% auto;
    text-transform: capitalize;
    font-size: 18px;
    text-align: center;
    font-weight: 450;
    border-bottom:1px solid lightblue;
`
const AddProduct= styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
.MuiIconButton-root{
    border-radius: 5px;
    background: #c1ecbd;
    margin-top: 7px;
    margin-right: 11px;
}

`
const ProductForm = styled.form`
display: grid;
    grid-template-columns: 18% 8% 8% 8% 9% 7% 11% 12% 13% auto;
    place-items: center;
    .MuiIconButton-root{
    border-radius: 5px;
    background: #c1ecbd;
   font-size:13px;
}
`