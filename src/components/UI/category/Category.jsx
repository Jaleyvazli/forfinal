import React from "react";
import { Link } from "react-router-dom";
import view from "../../../assets/images/view/view.jpg";

import "../../../styles/category.css";


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
      
    </div>
  );
};

export default Category;