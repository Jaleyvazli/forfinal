
import React from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import mainphoto from "../assets/images/view/uptown-dallas-pizza.jpg";


const Main = () => {
return (
    <Helmet title="Main">
      <section>
        <Container>
          <Row>
           

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={mainphoto} alt="hero-img" className="mainphoto" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    
    </Helmet>
  );
};

export default Main;