import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <>
        <Wrapper>
            <Container>
                {/* <LogoSection>
                    <p>Cloth Store</p>
                </LogoSection> */}
                <Main>
                    <LeftSection>
                        <img src="/loginImage.svg" alt="" />
                    </LeftSection>
                    <RightSection>
                        <p className="loginText">login to continue</p>
                        <input className="username" placeholder="Enter Username" />
                        <input className="password" placeholder="Enter Password" />
                        <button className="loginBtn" >LOGIN</button>
                    </RightSection>
                </Main>
            </Container>
        </Wrapper>
        </>
    )
}

export default Login

const Wrapper = styled.div`
background:white;
padding: 1px;
height: 100vh;
display: flex;
justify-content: center;
`
const Container = styled.div`
    background: #fbb09836;
    box-shadow: inset 0px 0px 14px 7px #929090d1;
    border-radius: 30px;
    max-height: 547px;
    margin: 19px;
    padding: 13px;
    width:80%;
    max-width: 800px;
    display:flex;
    border:1px solid grey;
    
    
`
// const LogoSection = styled.div`
// font-size:48px;
// `
const Main = styled.div`
display:flex;
align-items: center;
`
const LeftSection = styled.div`
display:flex;
align-items: center;
width:50%;
width: 50%;
    border-right: 1px solid grey;
    margin-right: 30px;
    padding-right: 17px;
img{
    width:100%;
}
`
const RightSection = styled.div`
.username,.password{
    border: none;
    border-bottom: 2px solid black;
    border-radius: 9px;
    padding: 8px 14px;
    outline: none;
    margin: 20px 0;
    font-size: 17px;
}
.loginText{
    font-size:21px;
    text-transform:capitalize;
    font-weight:500;
}
.loginBtn{
    border:none;
    border-radius:10px;
    outline:none;
    font-size: 17px;
    cursor: pointer;
    background:#fbb098;
    color:white;
    padding: 7px 7px;
    width: 36%;
    margin: auto;
    :hover{
        background-color:#f89675 ;
    }
}
display:flex;
flex-direction:column;
flex:1;
/* align-items: center; */
`