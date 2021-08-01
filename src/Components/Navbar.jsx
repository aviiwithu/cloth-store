import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import{useSelector} from 'react-redux';

const Navbar = () => {
    const isLogin = useSelector((state)=>state.user.isLogin);
    return (
        <>
        <HeaderWrapper>
            <Logo>
                <NavLink to="/" >
                        <p>Cloth Store</p>
                </NavLink>
            </Logo>
            <LoginButton>
                <NavLink to="/login" >
                    <button className="loginBtn"> {isLogin?"Account":"Login"} </button>
                </NavLink>
                <NavLink to="/cart" >
                    <button className="loginBtn"> Cart </button>
                </NavLink>
            </LoginButton>
        </HeaderWrapper>
        <NavbarWrapper>
           <button className="navBtn"><NavLink to="/" > Home</NavLink></button>
           <button className="navBtn"> <NavLink to="/men" >Men</NavLink></button>
           <button className="navBtn"><NavLink to="/women" >Women</NavLink></button>
           <button className="navBtn"><NavLink to="/children" > Children </NavLink> </button>

        </NavbarWrapper>
        </>
    )
}

export default Navbar

const HeaderWrapper = styled.div`
background-color:rgba(249, 135, 99, 0.66);
display:flex;
justify-content:space-between;
align-items:center;
padding:0 35px;
`

const Logo = styled.div`
a{
    text-decoration:none;
    color:inherit;
}
p{
    font-family: Lobster;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 50px;
}

`
const LoginButton = styled.div`
display:flex;
gap:10px;
.loginBtn{
    border:1px solid black;
    border-radius:8px;
    outline:none;
    font-size: 18px;
    line-height: 26px;
    cursor: pointer;
    background:none;
    padding: 3px 12px;
}
`
const NavbarWrapper= styled.div`
.navBtn{
    padding:13px 15px;
    background:none;
    border:none;
    font-size: 17px;
}
a{
    text-decoration:none;
    color:inherit;
    
}

background:rgba(249, 135, 99, 0.66);
margin-top:10px;
width:fit-content;
`