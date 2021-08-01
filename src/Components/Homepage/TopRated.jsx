import React from 'react';
import styled from 'styled-components';
import Product from '../Reusable/Product';
import {useSelector} from 'react-redux';

const TopRated = () => {
    const rated = useSelector(({home})=>home.product.topRated);
    return (
        <Wrapper>
            <Heading>
                <p>Top rated</p>
            </Heading>
            <TopRatedProducts>
                {
                    rated.map((p,i)=>(
                        <Product key={i} name={p.name} price={p.price} image={p.thumbImage} product={p} />
                    ))
                }
                
            </TopRatedProducts>
            
        </Wrapper>
    )
}

export default TopRated

const Wrapper = styled.div`
background:linear-gradient(181deg,rgb(240 181 201 / 48%),#4e4e4c47);
padding:15px 0px;
`
const Heading = styled.div`
font-size: 29px;
letter-spacing: 0.019em;
font-weight: 500;
line-height: 1.1;
padding:20px 1px;
margin-left:5rem;
text-transform:capitalize;
font-weight:600;
`
const TopRatedProducts = styled.div`
display:flex;
justify-content:space-evenly;
`