/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import styled from "styled-components";


let YellowBtn = styled.button`
  background: ${props => props.bg};
  color: ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding: 10px;
`; // props 사용가능

let NewBtn = styled.button(YellowBtn)`
  padding: 20px;
`

function Detail(props){

  let {id} = useParams();
  let setProdct = props.shoes.find((v)=> v.id == id)


  return (
    <div className="container">
      <div className="row">
      {
        id < props.shoes.length? 
        <>
          <YellowBtn bg='blue'>버튼</YellowBtn>
          <YellowBtn bg='orange'>버튼</YellowBtn>
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${ Number(setProdct.id)+1 }.jpg`} width="100%" />
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