import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import Filters from './Reusable/Filters';
import HeroSection from './Reusable/HeroSection';
import ProductList from './Reusable/ProductList';
 import {useDispatch,useSelector} from 'react-redux';
 import {getWomenProducts} from '../redux/actions.js/actions';

const Women = () => {
    const product = useSelector((state)=>state.women.product);
    const dispatch = useDispatch();

    const [filterP, setFilterP] = useState(product);

    useEffect(()=>{
        dispatch(getWomenProducts());
    },[dispatch])
    return (
        <Wrapper>
            <HeroSection heroImage="/women-heroImage.jpg" />
            <MainContent>
                <Filters product={product} handler={setFilterP} />
                <ProductList productList={filterP||product} />
            </MainContent>
            
        </Wrapper>
    )
}

export default Women

const Wrapper = styled.div`
`
const MainContent = styled.div`
display:flex;
justify-content: space-between;
`