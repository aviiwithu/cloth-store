import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { getAllUsers } from '../redux/actions/userActions'

const User = () => {
    const dispatch = useDispatch();
    const users= useSelector((state)=>state.users.users);

    useEffect(()=>{
        dispatch(getAllUsers());
    },[dispatch]);

    return (
        <>
           {!users?<h1>"Loading users..."</h1>:(
               users.map((user)=>(
                   <UserWrapper key={user._id} >
                       <p>{user.name} </p>
                       <p>{user.email} </p>
                       <p>{user.isAdmin?"Admin":"No Admin"} </p>
                       <p>Items in Cart:{user.cartList.length} </p>
                   </UserWrapper>
               ))
           ) }
        </>
            
    )
}

export default User

const UserWrapper = styled.div`
display:grid;
grid-template-columns: 199px 206px 179px 164px;
place-items: center;
`