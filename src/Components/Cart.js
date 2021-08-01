import React from 'react';
import styled from 'styled-components';
import{useSelector,useDispatch} from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state)=>state.user.cart.item);
    const cartCount = useSelector((state)=>state.user.cart.count);
    const cartTotal = useSelector((state)=>state.user.cart.totalPrice);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <PromoBanner>
            <h1>promo banner</h1>
            </PromoBanner>
            <CartWrapper>
            <div className="items">
                    {!cartItems.length>0?<h1 style={{textAlign:"center"}} >Your cart in empty</h1>:
                    cartItems.map((item)=>
                    
                        <CartItems key={item.product._id} >
                            <ItemImage>
                                <img className="itemImg" src={item.product.image} alt="" />
                            </ItemImage>
                            <ItemDetail>
                                <ItemName>
                                    <p className="itemName" >{item.product.name} </p>
                                </ItemName>
                                <div className="updateVal" >
                                    <ItemQuantity>
                                        <select value={item.quantity} onChange={(e)=>dispatch({
                                            type:"updateQty",payload:{qty:e.target.value, id:item.product._id}})} >
                                            <option value={1} >1</option>
                                            <option value={2} >2</option>
                                            <option value={3} >3</option>
                                            <option value={4} >4</option>
                                            <option value={5} >5</option>
                                        </select>
                                    </ItemQuantity>
                                    <ItemSize>
                                        <select value={item.size} onChange={(e)=>dispatch({
                                            type:"updateSize",payload:{size:e.target.value, id:item.product._id}})} >
                                                <option value={"sm"} >SM</option>
                                                <option value={"md"} >MD</option>
                                                <option value={"xl"} >XL</option>
                                                
                                        </select>
                                    </ItemSize>
                                        </div>
                                
                            </ItemDetail>
                            <ItemPrice>
                                <p className="itemPrice" >{item.product.price}</p>
                            </ItemPrice>
                        </CartItems>
                    
                    )  }
                </div>
                 
                <CartSummary>
                    <h2 className="summary">Summary</h2>
                    <hr/>
                    <p>Price:INR {cartTotal}</p>
                    <p>Quantity: {cartCount} </p>
                    <p>pay now</p>

                </CartSummary>

            </CartWrapper>
        </Wrapper>
    )
}

export default Cart

const Wrapper = styled.div`
padding: 20px;
`
const PromoBanner = styled.div`
    
    background:#fbb098;
    height:110px;
    width:100%;
    box-shadow: 0px 0px 4px 1px grey;
    border-radius: 6px;
    padding: 8px;
`
const CartWrapper = styled.div`
    margin-top: 20px;
    display:flex;
    justify-content: center;
    gap: 5px 20px;
    align-items: end;
    .items{
        display:flex;
        flex-direction: column;
        gap:16px 0;
        flex:1;
    }
`
const CartItems = styled.div`
    height:100px;
    width:80%;
    background-color: #fbb098;
    box-shadow: 0px 0px 4px 1px grey;
    border-radius: 6px;
    padding: 8px 15px;
    display:flex;
    align-items: center;
`
const ItemImage = styled.div`
height:100%;
width:150px;
.itemImg{
    height:100%;
    width:100%;
    object-fit: contain;
}
`
const ItemDetail = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
flex:1;
.updateVal{
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 8px 0;
    select{
        border-radius: 5px;
        outline: none;
        border: 1px solid grey;
        padding: 3px 8px;
        font-size: 13px;
    }
}
`
const ItemName = styled.div``

const ItemQuantity = styled.div`
`
const ItemSize = styled.div``
const ItemPrice = styled.div`
font-weight: 500;
font-size: 18px;
`
const CartSummary = styled.div`
    height:fit-content;
    width:200px;
    box-shadow: 0px 0px 4px 1px grey;
    border-radius: 6px;
    padding: 8px;
    hr{
        border:none;
        border-radius: 2px;
        background-color:#fbb098;
        height:5px;
    }
    .summary{
        font-size: 21px;
        letter-spacing: 0.034em;
        font-weight: 500;
        line-height: 1.6;
    }
`