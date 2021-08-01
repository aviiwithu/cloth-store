import React from 'react';
import styled from 'styled-components';
import Product from '../Reusable/Product';
import {useSelector} from 'react-redux';

const FirstSection = () => {
    const explore = useSelector(({home})=>home.product.explore);
    return (
        <Wrapper>
            <ExploreBtn>
                <p className="explore">Explore</p>
                <p className="exploreText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
                     doloribus? Tempore saepe et incidunt </p>
                <button className="exploreBtn">Take me there</button>

            </ExploreBtn>
            <Products>
                {
                    explore.map((p,i)=>(
                        <Product key={i} name={p.name} image={p.thumbImage} price={p.price} product={p} />
                    ))
                }
            </Products>
            
        </Wrapper>
    )
}

export default FirstSection

const Wrapper = styled.div`
margin-top:5px;
display:flex;
justify-content:space-evenly;
background: rgb(249 135 99 / 15%);
padding:50px 3px;
`
const ExploreBtn = styled.div`
    width: 231px;
margin: 6px 16px;
padding: 5px;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

.explore{
    font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 42px;
letter-spacing: 0.065em;
color: #0C0C0C;
}
.exploreText{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
margin: 10px 8px;
}
.exploreBtn{
    width: 185px;
height: 51px;
background: rgba(249, 135, 99, 0.7);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 124.69%;
border:none;
cursor: pointer;
:hover{
    background-color: rgba(249, 134, 99, 0.925);
}
}
`
const Products = styled.div`
display:flex;
flex-wrap: wrap;

`