import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import ForProducts from "../assets/fake-data/ForProducts";
import "../styles/all-foods.css";


const AllFoods = () => {

  return (
    
    <Helmet title="All-Foods">
      <CommonSection title="" />
      <ForProducts/>
     
    </Helmet>
   
  );
};

export default AllFoods;