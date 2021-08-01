import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import Filters from './Reusable/Filters';
import HeroSection from './Reusable/HeroSection';
import ProductList from './Reusable/ProductList';
import {useDispatch,useSelector} from 'react-redux';
import { getChildrenProducts} from '../redux/actions.js/actions';
 

const Children = () => {
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.children.product);
    const [filterP, setFilterP] = useState(product);

    useEffect(()=>{
        dispatch(getChildrenProducts());
    },[dispatch])
    return (
        <Wrapper>
            <HeroSection heroImage="/children-heroImage.jpg" />
            <MainContent>
                <Filters product={product} handler={setFilterP} />
                <ProductList productList={filterP||product} />
            </MainContent>
            
        </Wrapper>
    )
}

export default Children

const Wrapper = styled.div`
`
const MainContent = styled.div`
display:flex;
justify-content: space-between;
`