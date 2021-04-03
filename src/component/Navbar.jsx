import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  
  return (
    <Wrapper>
      <LogoWrapper>
        <NavLink exact to="/" > <img src="/logo.png" alt="logo"/> </NavLink>
      </LogoWrapper>
      <NavItems>
        <NavLink exact to="/" > <li>Product </li> </NavLink>
        <NavLink to="/user" > <li>User </li> </NavLink>
        <NavLink to="/order" > <li>Order </li> </NavLink>
      </NavItems>

    </Wrapper>
  );
}

const Wrapper = styled.div`
display:flex;
border-bottom:1px solid black;
padding: 0 20px;
`
const LogoWrapper = styled.div`
margin: 0px 39px;
img{
  width:100px;
}
`
const NavItems = styled.div`
display:flex;
a{
    text-decoration:none;
  }
li{
  list-style:none;
  margin:20px;
  text-decoration:none;
  line-height: 1;
letter-spacing: 0.129em;
font-size: 20px;
font-weight: 600;
}
.active{
  border-bottom: 2px solid black;
color: white;
  line-height: 1;
letter-spacing: 0.129em;
font-style: italic;
font-size: 20px;
font-weight: 600;
background-color: #FBAB7E;
background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);

}
`