import { configureStore, createSlice } from "@reduxjs/toolkit";

/* 
    Redux 쓰는 이유 -> 컴포넌트간 state 공유 쉬워짐
    => 컴포넌트간 공유할 state만 저장하는 것이 좋음
 */

let user = createSlice({ //useState()역할
    // name: 'state이름',
    // initialState: '값'

    name: 'user',
    initialState: 'kim'
})
let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12]
})

let cart = [
    {id: 0, name: "White and Black", count: 2},
    {id: 2, name: "Grey Yordan", count: 1}
]

let cartItem = createSlice({
    name: "cartItem",
    initialState: cart
})

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cartItem: cartItem.reducer
    }
})