import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {getOneProduct} from '../../api/index';
import {useParams} from 'react-router-dom';

const ProductDetails = ({location}) => {
    const dispatch = useDispatch();
    const {id} = useParams();

    
    const [product, setproduct] = useState(location.product?location.product:null);
    const[size,setSize] = useState("SM");
    const[quantity, setQuantity] = useState(1);

        
    useEffect(()=>{
        if(!location.product){
          getOneProduct(id).then(inf=>inf.data).then(productInfo=>setproduct(productInfo.data));
          
        }
    },[id,location.product]);
    
    const handleSize=(e)=>{
        setSize(e.target.value);
    }
    
    const handleQuantity=(e)=>{
        setQuantity(parseInt(e.target.value));
    }
    
   if(product){
    return (
        <Wrapper>
            <ImageSection>
                <MainImage>
                    <img src={product.image} alt="" />
                </MainImage>
                
            </ImageSection>
            <DetailSection>
                <h4 className="productName">{product.name}</h4>
                <p className="description">{product.description}</p>
                <p className="price">Price:  INR<strong> {product.price} </strong> </p>
                <p className="size">Size: 
                    <select value={size} onChange={handleSize} >
                        <option value="SM" >SM</option>
                        <option value="MD" >MD</option>
                        <option value="XL" >XL</option>
                    </select>   
                </p>
                <ActionSection>
                    <Quantity >
                        <p className="quantityText">Quantity</p>
                        <select value={quantity} onChange={handleQuantity} >
                            <option value={1} >1</option>
                            <option value={2} >2</option>
                            <option value={3} >3</option>
                            <option value={4} >4</option>
                            <option value={5} >5</option>
                        </select>
                        
                    </Quantity>
                    <AddToCart onClick={()=>dispatch({type:"addToCart",
                                                    payload:{product:location.product||product,size,quantity}})}>
                        Add to cart
                    </AddToCart>
                </ActionSection>
            </DetailSection>
            
        </Wrapper>
    )
   } else {
       return <h1>loading...</h1>
   }

}

export default ProductDetails

const Wrapper = styled.div`
display:flex;
padding:30px;
min-height: 75vh;
`
const ImageSection = styled.div`
width:50%;
display: flex;
flex-direction: column;
align-items: center;
`
const MainImage= styled.div`
    max-height: 400px;
    width: inherit;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 0px 1px 10px 2px #a6a2a2;
    margin:15px 10px;
    padding:5px;
    img{
        object-fit: contain;
        height:100%;
    }
`

const DetailSection = styled.div`
padding: 5px 25px;
font-size: 18px;
width:43%;
.description{
    line-height: 1.6;
    margin: 20px 0;
}
.productName{
    font-size: 30px;
letter-spacing: 0.022em;
font-weight: 500;
text-transform: capitalize;
}
.size{
    padding:8px 0;
    select{
        margin:0 10px;
        padding: 3px;
        border-radius: 4px;
        outline: none;
        font-size: 16px;
        background: #fa9e80;
        color: white;
        font-weight: 400;
        box-shadow: 0px 2px 3px 0px grey;
        border: none;
        cursor: pointer;
    :hover{
        background-color: rgb(249 135 99 / 96%);
    }
}
}
`
const ActionSection= styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-top: 2rem;
`
const Quantity= styled.div`
display:flex;
select{
    padding: 2px 12px;
    border-radius: 5px;
    outline: none;
    font-size: 17px;
    background: #fa9e80;
    color: white;
    font-weight: 500;
    box-shadow: 0px 2px 3px 0px grey;
    border: none;
    cursor: pointer;
    :hover{
        background-color: rgb(249 135 99 / 96%);
    }
}
option{
    
}
p{
    padding-right:10px;
}
.quantityText{
    font-size: 20px;
font-weight: 500;
letter-spacing: 0.035em;
}
`
const AddToCart= styled.button`
padding: 8px 15px;
border-radius: 8px;
color: white;
background: rgba(249, 135, 99, 0.81);
font-size: 20px;
letter-spacing: 0.054em;
font-weight: 500;
outline: none;
border:none;
box-shadow: 0px 1px 7px 1px grey;
cursor: pointer;
text-transform: capitalize;
:hover{
    background-color:rgb(249 135 99 / 96%);
}
`