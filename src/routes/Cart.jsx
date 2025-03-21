import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeAge } from "./../store/userSlice"
import { increaseCnt } from "./../store/cartSlice"
import { memo, useMemo, useState } from "react"


// let MemoComponent = memo(function MemoComponent() {
//     console.log('재렌더링됨');
//     return <div>자식임</div>
// })
// memo의 원리 -> props가 변할때만 재렌더링
// 렌더링 될 때마다 props의 변화를 비교함 -> 느려질 가능성 있음

function useMemoFn(){
    console.log('엄청나게 반복하는 문장');
}


function Cart(){

    let state = useSelector((state)=> state) // Redux store 가져오기
    let dispatch = useDispatch(); // store.js에 요청을 보내주는 함수

    let [count, setCount] = useState(0)

    let result = useMemo(()=>{return useMemoFn()}, [state])
    // useMemo -> 컴포넌트 렌더링시 1회만 실행
    // dependency있으면 특정 state변화시에만 실행
    // memo와 useMemo의 차이점은 실행이 되는 시점 -> memo는 html렌더링이 다 끝나고 실행, useMemo는 html렌더링과 동시에 실행

    return (
        <div>
        {/* <MemoComponent></MemoComponent> */}
        <button onClick={()=>setCount(count+1)}></button>
        <h4>{state.user.name} {state.user.age}의 장바구니</h4>
        <button onClick={()=>{dispatch(changeAge(10))}}>버튼</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cartItem.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(increaseCnt(item.id))
                                        }}>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )

}

export default Cart