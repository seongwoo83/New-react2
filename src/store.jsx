import { configureStore } from "@reduxjs/toolkit";

/* 
    Redux 쓰는 이유 -> 컴포넌트간 state 공유 쉬워짐
    => 컴포넌트간 공유할 state만 저장하는 것이 좋음


    Redux의 state변경하는법
    -> state수정해주는 함수 만들고 원할 때 그 함수 실행해달라고 store.js에 요청 -> useDispath()
    -> useDispatch() 디버깅으로 오류 해결이 쉬워짐
 */

import user from "./store/userSlice";
import cartItem from "./store/cartSlice";
import stock from "./store/stockSlice";

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cartItem: cartItem.reducer
    }
})