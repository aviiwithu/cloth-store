import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import Filters from './Reusable/Filters';
import HeroSection from './Reusable/HeroSection';
import ProductList from './Reusable/ProductList';
import {getMenProducts} from '../redux/actions.js/actions';
import {useDispatch,useSelector} from 'react-redux';

const Men = () => {
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.men.product);
    const [filterP, setFilterP] = useState(product);

    useEffect(()=>{
        dispatch(getMenProducts());
    },[dispatch])
    return (
        <Wrapper>
            <HeroSection heroImage="/men-heroImage.jpg" />
            <MainContent>
                <Filters product={product} handler={setFilterP} />
                <ProductList productList={filterP||product} />
            </MainContent>
        </Wrapper>
    )
}

export default Men

const Wrapper = styled.div`
`
const MainContent = styled.div`
display:flex;
justify-content: space-between;
`