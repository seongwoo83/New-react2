import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import data from './data';
import Detail from './routes/Detail';
import Cart from './routes/Cart';
import Card from './components/Card';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

export let Context1 = createContext(); // state보관함

function App() {


  // use~ : Hook
  let [shoes, setShoes] = useState(data);
  let [stock, setStock] = useState([10, 11, 12]);
  let [dataIndex, setDataIndex] = useState(2);
  let [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  //navigate(1) -> 앞으로 한 페이지 이동
  //navigate(-1) -> 뒤로 한 페이지 이동

  // Route - 각 페이지를 의미

  useEffect(()=>{
    if(!localStorage.getItem('watched')){
      let watchedProductList = [];
      localStorage.setItem('watched', JSON.stringify(watchedProductList), []);
    }
  })

  return (
    <>
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Wooniverse</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/detail")}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg">
              <button className='sortbtn'>정렬</button>
            </div>
            <Card shoes={shoes}/>
            <button onClick={()=>{
              setIsLoading(true);
              axios.get(`https://codingapple1.github.io/shop/data${dataIndex}.json`).then((result)=>{
                setDataIndex(dataIndex+1);
                const data = result.data;
                let copy = [...shoes, ...data];
                setShoes(copy);
                setIsLoading(false);
              }).catch(()=>{
                setIsLoading(false);
                alert('데이터가 없습니다.');
              })


              // 기본 JS문법 -> fetch
              fetch().then((result)=>{
                JSON.parse(result)
              })
            

              axios.post('/aefawf', {"name": "Jeong"}) // POST 전송
              // 여러개 전송
              Promise.all([ axios.get('/url1'), axios.get('/url2')]).then(()=>{}) //모두 완료되면 실행


            }}>더보기</button><span style={{display: isLoading == false ? 'none' : ''}}>로딩중입니다</span>
          </>
          } />
        <Route path='/detail/:id' element={
          <Context1.Provider value={{stock, shoes}}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />

        <Route path='/cart' element={<Cart />} />

        {/* Nested Routes */}
        {/* 
          Nested Routes 접속 시엔 상위element부터 다 보여줌
          -> 여러 유사한 페이지 필요할 때
         */}
        <Route path='/about' element={<About />} >
          <Route path='member' element={<div>멤버임</div>} /> {/* /about/member */}
          <Route path='location' element={<div>위치정보임</div>} /> {/* /about/location */}
        </Route>
        <Route path='/event' element={<Event />} >
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} /> {/* /about/member */}
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} /> {/* /about/location */}
        </Route>


        <Route path='*' element={<div>존재하지 않는 페이지 입니다.</div>} />
      </Routes>

      
      

    </div>
    </>
  )
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet> {/* nested Routes를 보여주는 구멍 */}
    </div>
  )
}
function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet> {/* nested Routes를 보여주는 구멍 */}
    </div>
  )
}



export default App
