import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Pages/Home/Home.css";
import NavbarComp from "../../components/Navbar";
import CarouselComp from "../../components/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Laskar from "../../Assets/laskar Pelangi Portrait.jpeg";
import Dilan from "../../Assets/Dilan 1990 Portrait.jpeg";
import Harry from "../../Assets/Harry Potter Portrait.jpeg";

const Home = () => {
  return (
    <div className="App">
      <NavbarComp />
      <Container className="mt-5">
        <Row className="d-flex flex-column mb-3 justify-content-center align-items-center">
          <Col>
          <h1 className="text-center">Disini Ada Carousel</h1>
            {/* <CarouselComp /> */}
          </Col>
          <Col className="p-2 w-100 mt-5">
            <h2 className="ms-5 mb-2 text-start">List Books</h2>
            <Container>
              <Row className="d-flex justify-content-center align-items-center">
                <Col className="d-flex justify-content-center align-items-center mt-4">
                  <Link to={"/detail"}>
                    <Card style={{ width: "18rem" }} className="card-home">
                      <Card.Img variant="top" src={Laskar} style={{ height: "20rem" }} />
                      <Card.Body>
                        <Card.Title>Laskar Pelangi</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere eu est eu fermentum. Cras tempor mollis urna. Integer mattis, metus ut aliquet faucibus.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col className="d-flex justify-content-center align-items-center mt-4">
                  <Link to={"/detail"}>
                    <Card style={{ width: "18rem" }} className="card-home">
                      <Card.Img variant="top" src={Dilan} style={{ height: "20rem" }} />
                      <Card.Body>
                        <Card.Title>Dilan 1990</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere eu est eu fermentum. Cras tempor mollis urna. Integer mattis, metus ut aliquet faucibus.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col className="d-flex justify-content-center align-items-center mt-4">
                  <Link to={"/detail"}>
                    <Card style={{ width: "18rem" }} className="card-home">
                      <Card.Img variant="top" src={Harry} style={{ height: "20rem" }} />
                      <Card.Body>
                        <Card.Title>Harry Potter</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere eu est eu fermentum. Cras tempor mollis urna. Integer mattis, metus ut aliquet faucibus.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
