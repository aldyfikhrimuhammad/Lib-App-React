import React, { useState } from 'react';
// import { listBooks } from '../../../Data';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/Pages/Detail/Detail.css'
import { Icon } from '@iconify/react';
import { Link, useParams } from 'react-router-dom';
import ModalComp from '../../components/Modal';
import Card from "react-bootstrap/Card";
import Harry from '../../Assets/Harry Potter Portrait.jpeg'
import ButtonComp from '../../components/Button';

const Detail = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [bookId] = useParams();
  // const [book] = useState(listBooks[bookId-1])
  return (

    <Container fluid className='w-100 Detail-Section'>
      <Row className="d-flex flex-column mb-3 justify-content-center align-items-center">
        <Col sm={6} className="p-2 w-100 upper-content">
          <div className="float-start m-3">
            <Link to='/' className="Back-Button">
              <Icon icon="bi:arrow-down-circle-fill" width="40" height="40" rotate={1} />
            </Link>
          </div>
          <h5 onClick={handleShow} className='float-end m-3 text-light Modal-Button'>Delete</h5>

          <Modal show={show} onHide={handleClose} classname="d-flex justify-content-center align-items-center flex-column">
            <Modal.Body classname="d-flex justify-content-center align-items-center flex-column">
              <Icon icon="el:ok-circle" color="green" width="250" height="250" classname="d-flex justify-content-center align-items-center" />
              <p classname=" mt-5 d-flex justify-content-center align-items-center">Data <strong>Harry Poter</strong> has been deleted!</p>
            </Modal.Body>
          </Modal>

          <h5 onClick={() => setModalShow(true)} className='float-end m-3 text-light Modal-Button'>Edit</h5>
          <ModalComp
            show={modalShow}
            onHide={() => setModalShow(false)} modalTitle={"Edit Data"}
          />
        </Col>
        <Col sm={6} className="p-2 w-100 lower-content">
          <Row>
            <Col md={8} className="p-3">
              <div className='float-start m-2'>
                <Button variant="warning" className='text-light rounded-pill disabled w-100 text-center mb-3' size="lg"><h3>Novel</h3></Button>
                <h1 className='Text-Title'>Harry Potter</h1>
                <h5 className='Text-Date'>30 June 2019</h5>
              </div>
              <h2 className="float-end mt-4 text-success Text-Status">Available</h2>
              <div className="right-side float-end">
                <hr />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ea laborum. Ducimus esse laudantium, necessitatibus ex unde enim provident temporibus similique tempore atque totam explicabo, dolorum error ut illo! Quo nostrum consequatur veniam voluptate nisi dicta, esse omnis. Nesciunt corrupti earum voluptatibus. Iusto porro quod atque velit ipsum pariatur deserunt quaerat. Voluptate accusantium cupiditate corrupti repellendus itaque cum illum expedita modi sit. Dolorum error ut illo! Quo nostrum consequatur veniam voluptate nisi dicta, esse omnis. Nesciunt corrupti earum voluptatibus. Molestias, ea laborum. Ducimus esse laudantium, necessitatibus ex unde enim provident temporibus similique tempore atque totam explicabo, dolorum error ut illo! Quo nostrum consequatur veniam voluptate nisi dicta, esse omnis.</p>
              </div>
            </Col>
            <Col md={4} className='d-flex flex-column justify-content-center align-items-center Content-Right'>
              <Card.Img src={Harry} className='w-50 rounded Img-Card' />
              <div className=' w-50 mt-5 mb-5 d-flex justify-content-center align-items-center Btn-Detail'>
                <ButtonComp buttonText={"Borrow"} size="lg" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Detail