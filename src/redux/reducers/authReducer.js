
const initialState ={
    isLogin:false,
    userInfo:{},
    cart:{
        count:0,
        totalPrice:0,
        item:[]
    }
}

export const authReducer = (state=initialState,action)=>{
        const cart= state.cart;
        const item = state.cart.item;
        const count = state.cart.count;
        const totalPrice = state.cart.totalPrice;
    switch(action.type){
        case "addToCart":
            // const cart= state.cart;
            // const item = state.cart.item;
            // const count = state.cart.count;
            // const totalPrice = state.cart.totalPrice;
            
            const checkProduct = item.find((item)=>item.product._id===action.payload.product._id);
            if(!checkProduct){
                return {
                    ...state,
                    cart:{...cart,item:[...item,action.payload],
                        count:count+action.payload.quantity,
                        totalPrice:totalPrice+action.payload.product.price*action.payload.quantity}
                };
            } else {
                alert("item already in cart");
                return state;
            }
        case "updateQty" :

            const itemInd = item.findIndex(elem=>elem.product._id===action.payload.id)
            if(itemInd===-1) return state;
            item[itemInd].quantity = action.payload.qty;
            
            return {
                ...state,
                cart:{...cart,
                    item:[...item]
                }
            }
        case "updateSize":
            const pIndex = item.findIndex(elem=>elem.product._id===action.payload.id)
            if(pIndex===-1) return state;
            item[pIndex].size = action.payload.size
            return {
                ...state,
                cart: {...cart,
                item:[...item] }
            };
        default:
            return state;
    }
}