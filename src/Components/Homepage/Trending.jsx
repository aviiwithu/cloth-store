import React from 'react';
import styled from 'styled-components';
import Product from '../Reusable/Product';
import {useSelector} from 'react-redux';

const Trending = () => {

    const trending = useSelector(({home})=>home.product.trending);
    return (
        <Wrapper>
            <Heading>
                <p>Top trending today</p>
            </Heading>
            <TrendingProducts>
            {
                    trending.map((p,i)=>(
                        <Product key={i} name={p.name} price={p.price} image={p.thumbImage} product={p} />
                    ))
                }

            </TrendingProducts>
            
        </Wrapper>
    )
}

export default Trending

const Wrapper = styled.div`
background:linear-gradient(180deg, rgba(249, 135, 99, 0.51) 0.31%, rgba(210, 244, 255, 0.51) 100%);
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
const TrendingProducts = styled.div`
display:flex;
justify-content:space-evenly;
`