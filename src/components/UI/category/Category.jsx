import React from "react";
import { Link } from "react-router-dom";
// import { Container, Row, Col } from "reactstrap";
// // import PizzaPhoto from "../../../assets/images/pizzamain.png";
// import categoryImg01 from "../../../assets/images/category-01.png";
// import categoryImg02 from "../../../assets/images/category-02.png";
// import categoryImg03 from "../../../assets/images/category-03.png";
// import categoryImg04 from "../../../assets/images/category-04.png";
import view from "../../../assets/images/view/view.jpg";

import "../../../styles/category.css";

// const categoryData = [
//   {
//     display: "Fastfood",
//     imgUrl: categoryImg01,
//   },
//   {
//     display: "Pizza",
//     imgUrl: categoryImg02,
//   },

//   {
//     display: "Asian Food",
//     imgUrl: categoryImg03,
//   },

//   {
//     display: "Row Meat",
//     imgUrl: categoryImg04,
//   },

// ];

const Category = () => {
  return (
    <div className="ikincihisse">
      <img  className="forview" src={view} alt="view" />
      <div className="fortext2" >
        <h2 className="forh2">Are you ready to come here?</h2>
        <p className="forp2 ">
Come on over and check us out!
Please don't forget to make a reservation!<br />
We’ll be glad to see you here.</p></div>
<div className="forreservbtn lg=1" >  <button className="for__reserve-btn">
                    <Link to="/reservation" className="forreserve">Reserve a spot</Link>
                  </button></div>
      
    {/* <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container> */}
    </div>
  );
};

export default Category;