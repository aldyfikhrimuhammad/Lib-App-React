import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/Pages/Detail/Detail.css'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import ModalComp from '../../components/Modal';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Harry from '../../Assets/Harry Potter Portrait.jpeg'

const Detail = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid className='w-100'>
      <Row className="d-flex flex-column mb-3 justify-content-center align-items-center">
        <Col sm={6} className="p-2 w-100 border upper-content">
          <div className="float-start m-3">
            <Link to='/'>
              <Icon icon="bi:arrow-down-circle-fill" width="40" height="40" rotate={1} />
            </Link>
          </div>
          <h5 onClick={() => setModalShow(true)} className='float-end m-3 text-light'>Delete</h5>
          <ModalComp
          modalTitle={"Delete"}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <h5 onClick={() => setModalShow(true)} className='float-end m-3 text-light'>Edit</h5>
          <ModalComp
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
        <Col sm={6} className="p-2 w-100 border lower-content">
          <Row>
            <Col sm={8} className="p-3">
              <div className='float-start m-2'>
                <Button variant="warning" className='text-light rounded-pill text-center' size="lg"><h3>Novel</h3></Button>
                <h1>Harry Potter</h1>
                <h5>30 June 2019</h5>
              </div>
              <h2 className="float-end mt-4 text-success">Available</h2>
              <div className="right-side float-end mt-4">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ea laborum. Ducimus esse laudantium, necessitatibus ex unde enim provident temporibus similique tempore atque totam explicabo, dolorum error ut illo! Quo nostrum consequatur veniam voluptate nisi dicta, esse omnis. Nesciunt corrupti earum voluptatibus. Iusto porro quod atque velit ipsum pariatur deserunt quaerat. Voluptate accusantium cupiditate corrupti repellendus itaque cum illum expedita modi sit officiis, animi necessitatibus totam, qui magni laudantium quidem soluta asperiores error! Officia, odit.</p>
              </div>
            </Col>
            <Col sm={4} className='d-flex flex-column justify-content-center align-items-center'>
              <Card.Img src={Harry} className='w-50 rounded' />
              <Button variant="warning" className='text-light rounded text-center w-50 mt-5 text-light shadow block mb-5' size="lg"><h3>Borrow</h3></Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Detail