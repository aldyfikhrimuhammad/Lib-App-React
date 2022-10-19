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
      <Container>
      <Row className='d-flex flex-column'>
        <Col><CarouselComp/></Col>
        <Col>
          <h1>List Books</h1>
        </Col>
      </Row>
    </Container>
        
    </div>
  )
}

export default Home