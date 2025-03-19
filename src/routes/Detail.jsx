/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Context1 } from "./../App.jsx"
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice.jsx";


function Detail(props){

  let { stock, shoes } = useContext(Context1); // 보관함 열기

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [input, setInput] = useState('');
  let [tab, setTab] = useState(0);

  let dispatch = useDispatch();

  let {id} = useParams();
  let setProdct = props.shoes.find((v)=> v.id == id)

  useEffect(() => {  // 렌더링이 다 진행되고 나서 실행됨
    let timer = setTimeout(() => { setAlert(false); }, 2000);

    return ()=>{ // useEffect동작 전에 실행되는 코드(aka. clean up function), mount시에는 실행되지 않음, unmount시에는 실행됨
      clearTimeout(timer);
    }
  }, [count]); //dependency -> 해당 변수가 변할때마다 실행, 없으면 mount시에만 실행됨

  useEffect(()=>{
    if(isNaN(input) == true){
      setInput(input.slice(0,-1));
      window.alert('숫자만 입력가능합니다.');
    }
  }, [input])

  useEffect(()=>{
    const watchedList = JSON.parse(localStorage.getItem('watched'));
    let isWatched = false;
    if(watchedList.length > 0){
      isWatched = watchedList.includes(setProdct.id)
    }

    if(!isWatched){
      watchedList.push(setProdct.id)
      localStorage.setItem('watched', JSON.stringify(watchedList))
    }
  })

  useEffect(()=>{}) // 1. 재렌더링마다 코드실행
  useEffect(()=>{}, []) // 2. mount시 1회 코드실행
  //useEffect(()=>{}, [aaa]) // 3. aaa라는 state가 update되면 실행됨
  useEffect(()=>{
    return (()=>{})
  })  // 4. useEffect실행 전에 실행됨

  return (
    <div className="container">
      <div className="row">
      {
        id < props.shoes.length? 
        <>
          {
            alert == true
          ? <div className="alert alert-warning">
              2초이내 구매시 할인
            </div>
          : null
          }
          <button onClick={()=>setCount(count + 1)}>{count}버튼</button>
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${ Number(setProdct.id)+1 }.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}/>
            <h4 className="pt-5">{setProdct.title}</h4>
            <p>{setProdct.content}</p>
            <p>{setProdct.price}원</p>
            <button className="btn btn-danger" onClick={()=>{dispatch(addItem(setProdct))}}>주문하기</button> 
          </div>
        </>
        : 
        <>
          <div className="col-12">없는 상품입니다.</div>
        </>
      }
        
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>setTab(0)}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>setTab(1)}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>setTab(2)}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      
      <TabContent tab={tab} />
      
      


    </div> 
  )
}

function TabContent({tab}){
  let {stock} = useContext(Context1);
  return (
    <div>내용{tab}</div>
  )
}

export default Detail;