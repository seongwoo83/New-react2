import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"

function Cart(){

    let cartItem = useSelector((state)=> state.cartItem) // Redux store 가져오기
    
    
    return (
        <div>
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
                        cartItem.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                    <td>안녕</td>
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