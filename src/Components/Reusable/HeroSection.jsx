import React from 'react';
import styled from 'styled-components';

const HeroSection = ({heroImage}) => {
    return (
        <Wrapper>
                <img src={heroImage} alt="" />
        </Wrapper>
    )
}

export default HeroSection

const Wrapper = styled.div`


img{
    width:100%;
}
`
