import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Laskar from "../../Assets/laskar Pelangi Portrait.jpeg";
import Dilan from "../../Assets/Dilan 1990 Portrait.jpeg";
import Harry from "../../Assets/Harry Potter Portrait.jpeg";
import CardComp from "../../components/Card";
import NavbarComp from "../../components/Navbar";
import CarouselComp from "../../components/Carousel";
import "../../styles/Pages/Home/Home.css";

const Home = () => {
  const listBooks = [
    {
      image: Laskar,
      title: "Laskar Pelangi",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ea laborum. Ducimus esse laudantium, necessitatibus ex unde enim provident temporibus similique tempore atque totam explicabo, dolorum error ut illo!"
    },
    {
      image: Dilan,
      title: "Dilan 1990",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ea laborum. Ducimus esse laudantium, necessitatibus ex unde enim provident temporibus similique tempore atque totam explicabo, dolorum error ut illo!"
    },
    {
      image: Harry,
      title: "Harry Potter",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ea laborum. Ducimus esse laudantium, necessitatibus ex unde enim provident temporibus similique tempore atque totam explicabo, dolorum error ut illo!"
    }
  ]

  return (
    <div className="App">
      <NavbarComp />
      <Container className="mt-5">
        <Row className="d-flex flex-column mb-3 justify-content-center align-items-center">
          <Col className='w-100 p-5'>
            <CarouselComp />
          </Col>
          <Col className="p-2 w-100 mt-5">
            <h2 className="ms-5 mb-2 text-start">List Books</h2>
            <Container>
              <Row className="d-flex justify-content-center align-items-center">
                <Col className="d-flex justify-content-center align-items-center mt-4">
                  <Link to={"/detail"} className="d-flex justify-content-center align-items-center mt-4 card-Home">
                    {listBooks.map(book => {
                      return (
                        <CardComp
                          image={book.image}
                          title={book.title}
                          description={book.description}
                        />
                      )
                    }
                    )}
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
