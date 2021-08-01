const initialState={
    cartCount:0,
    cartPrice:0,
    cartItem:[]
}

export const cartReducer = (state=initialState,action)=>{
    switch(action.type){
        case "addToCfart":
            const checkProduct = state.cartItem.find((item)=>item._id===action.payload._id);
            if(!checkProduct){
                return {
                ...state,
                cartItem:[...state.cartItem,action.payload]
            }
        }
            
        case "deleteProduct":
            return {
                ...state,
                cartItem:state.cartItem.filter((item)=>item._id!==action.payload.id)
            }
        case "updateProduct":
            return {
                ...state,
                cartItem:[...state.cartItem]
            }
        
        default:
            return state;
    }
}