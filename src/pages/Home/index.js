import React from 'react'
import NavbarComp from '../../components/Navbar'
import '../../styles/Pages/Home/Home.css'
import CarouselComp from '../../components/Carousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <div className='App'>
    <NavbarComp/>
      <Container className="mt-5">
      <Row className='d-flex flex-column mb-3 justify-content-center align-items-center'>
        <Col><CarouselComp/></Col>
        <Col className='p-2 w-100 mt-5'>
          <h2 className='ms-5 mb-3 text-start'>List Books</h2>
        </Col>
      </Row>
    </Container>
        
    </div>
  )
}

export default Home