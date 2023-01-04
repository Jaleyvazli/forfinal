import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";


import "../../styles/footer.css";



const Footer = () => {
  return (

    <footer className="footer">
      <Container>
        <Row>
          {/* <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
             
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col> */}

          <Col lg="10" md="4" sm="6">
         
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item ">
                <span>Sunday - Thursday</span>
                <p>10:00 - 23:00</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item ">
              <span>Location:</span><p> Seyid Ezim Shirvani 7, Baku, Azerbaijan</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
             
              <ListGroupItem className=" delivery__time-item ">
                <p>Phone: 0703585051</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item ">
                <p>Email: blossom@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p className="invite">Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
          
            </div>
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;