import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({ //useState()역할
    // name: 'state이름',
    // initialState: '값'

    name: 'user',
    initialState: {name: 'kim', age: 20},
    reducers : {
        changeName(state /* 기존 state */){
            state.name = 'park'
        },
        changeAge(state, action){
            state.age += action.payload;
        }
    }
})


export let { changeName, changeAge } = user.actions

export default user