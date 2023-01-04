
import React from "react";
import Footer from "../components/Footer/Footer"
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";


import { Link } from "react-router-dom";
import ViewSlider from "../components/UI/slider/Viewslider"
import Category from "../components/UI/category/Category.jsx";
import Mainphoto from "../assets/images/view/banner.jpg"
import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

// import products from "../assets/fake-data/products.js";


// import ProductCard from "../components/UI/product-card/ProductCard.jsx";





const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,

  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,

  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,

  },
];

const Home = () => {


  return (
    <Helmet title="Home">


      <section className="first__section">
        <Container>
        <Col lg="6" md="6">
            <img className="mainphoto" src={Mainphoto} alt="mona" />
          </Col>
        
            <div className="formenubtn">
              <button className="for__menu-btn ">
                <Link to="/allfoods" className="formenu">View Menu</Link>
              </button></div>
           
        </Container>
      </section>



      <section className="pt-0">
        <Category />
      </section>

      <section className="servesection">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="feature__title mb-1" > What we <span>serve</span></h2>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item  px-4 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="sekiller w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>

                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="pt-1">
        
        <ViewSlider />
      </section>
      <Footer />
    </Helmet>
  );
};

export default Home;