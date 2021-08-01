import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Product = ({name,price,image,product}) => {
    return (
        
        <Wrapper>
            <Link to={{pathname:product?._id?`/detail/${product._id}`:'/',product}} >
                <ProductImage>
                    <img src={image} alt="thumbImage" />

                </ProductImage>
                <ProductInfo>
                    <Name>
                        <p>{name}</p>
                    </Name>
                    <Price>
                        INR {price}
                    </Price>

                </ProductInfo>
        </Link>
        </Wrapper>
    )
}

export default Product

const Wrapper = styled.div`
a{
text-decoration:none;
color:inherit;
}
width:268px;
margin:8px 5px;
background-color:white;
display: flex;
flex-direction: column;
border-radius:8px;
box-shadow: 3px 8px 6px 1px grey;
padding:10px;
cursor: pointer;
`
const ProductImage = styled.div`
img{
    width:100%;
    height: 250px;
    object-fit: contain;   
}
`
const ProductInfo = styled.div`
display:flex;
justify-content:space-between;
font-size:17px;
flex-direction: column-reverse;
gap:5px;
`
const Name = styled.div`
text-transform:capitalize;
`
const Price = styled.div`

font-weight:600;
`