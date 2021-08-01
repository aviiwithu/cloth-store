import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <About>
                <AboutItem>
                    <p>About us</p>
                    <p>Career</p>
                    <p>Press release</p>
                </AboutItem>
            </About>
            <SocialLinks>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </SocialLinks>
            <Category>
                <p>Male</p>
                <p>Female</p>
                <p>Children</p>
            </Category>
            <LogoSection>
                <BrandLogo>
                <img src="https://source.unsplash.com/jRjHSce08Os/" alt="brandLogo" />
                </BrandLogo>
                <AcceptedPayments>
                    <MasterCardLogo>
                        <img src="http://pngimg.com/uploads/mastercard/mastercard_PNG26.png" alt="" />
                    </MasterCardLogo>
                    <VisaLogo>
                        <img src="http://pngimg.com/uploads/visa/visa_PNG38.png" alt="" />
                    </VisaLogo>
                    <UpiLogo>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="" />
                    </UpiLogo>
                    <PaypalLogo>
                        <img src="http://pngimg.com/uploads/paypal/paypal_PNG12.png" alt="" />
                    </PaypalLogo>
                </AcceptedPayments>

            </LogoSection>
            
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
padding:2rem 0;
background-color:#606060;
display:flex;
justify-content: space-evenly;
p{
    padding:20px 0;
    color:white;
    text-align:center;
}
`
const About = styled.div`
`
const AboutItem = styled.div`
`
const SocialLinks = styled.div`
`
const Category = styled.div`
`
const LogoSection = styled.div`
img{
    width:100%;
    height:78%;
    object-fit:cover;
    border-radius: 5px;
}
`
const BrandLogo = styled.div`
width:161px;
height:93px;
`
const AcceptedPayments = styled.div`
display:flex;
flex-wrap: wrap;
img{
    padding:2px;
    border-radius: 2px;
}
`
const MasterCardLogo = styled.div`
height: 55px;
width: 65px;
margin:0 3px;
img{
    background-color:white;
}
`
const VisaLogo = styled.div`
height: 55px;
width: 65px;
margin:0 3px;
img{
    background-color:white;
}
`
const UpiLogo = styled.div`
height: 55px;
width: 65px;
margin:0 3px;
img{
    background-color:white;
    object-fit:contain;
}
`
const PaypalLogo = styled.div`
height: 55px;
width: 65px;
margin:0 3px;
img{
    background-color:white;
    object-fit:contain;
}
`