import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from './data';
import Detail from './routes/Detail';
import Card from './components/Card';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {


  // use~ : Hook
  let [shoes] = useState(data);
  let navigate = useNavigate();

  //navigate(1) -> 앞으로 한 페이지 이동
  //navigate(-1) -> 뒤로 한 페이지 이동

  // Route - 각 페이지를 의미

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
            <div className="main-bg"></div>
            <Card shoes={shoes}/>
          </>
          } />
        <Route path='/detail' element={<Detail shoes={shoes} />} />

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
