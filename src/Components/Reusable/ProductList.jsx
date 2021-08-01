import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const ProductList = ({productList}) => {
    
    return (
        <Wrapper>
            {productList?productList.map((product)=>(
                <Product key={product._id} name={product.name} image={product.thumbImage} price={product.price} product={product} />
            )): <h1>Loading...</h1> }
        </Wrapper>
    )
}

export default ProductList

const Wrapper = styled.div`
width:80%;
gap:16px;
display:flex;
flex-wrap:wrap;
justify-content: flex-start;

`