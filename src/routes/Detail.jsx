/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams();
  let setProdct = props.shoes.find((v)=> v.id == id)


  return (
    <div className="container">
      <div className="row">
      {
        id < props.shoes.length? 
        <>
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${ Number(setProdct)+1 }.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{setProdct.title}</h4>
            <p>{setProdct.content}</p>
            <p>{setProdct.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </>
        : 
        <>
          <div className="col-12">없는 상품입니다.</div>
        </>
      }
        
      </div>
    </div> 
  )
}

export default Detail;