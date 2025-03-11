import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeAge } from "./../store/userSlice"
import { increaseCnt } from "./../store/cartSlice"

function Cart(){

    let state = useSelector((state)=> state) // Redux store 가져오기
    let dispatch = useDispatch(); // store.js에 요청을 보내주는 함수
    
    return (
        <div>

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