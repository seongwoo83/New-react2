import { createSlice } from "@reduxjs/toolkit";

let cart = [
    {id: 0, name: "White and Black", count: 2},
    {id: 2, name: "Grey Yordan", count: 1}
]

let cartItem = createSlice({
    name: "cartItem",
    initialState: cart,
    reducers:{
        increaseCnt(cart, action){
            const item = cart.find((v)=>v.id === action.payload)
            if(item) item.count += 1;
        },
        addItem(cart, action){
            const itemObj = action.payload;
            const itemId = itemObj.id;
            const itemName = itemObj.title;
            const item = {
                id: itemId,
                name: itemName,
                count: 1
            }
            cart.push(item);
            
        }
    }
})
export let { increaseCnt, addItem } = cartItem.actions;

export default cartItem