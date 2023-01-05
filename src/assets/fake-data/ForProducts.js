
import React, { useState, useEffect } from "react";

import { Container, Row, Col  } from "reactstrap";

import products from "../fake-data/products";


import ProductCard from "../../components/UI/product-card/ProductCard";



const ForProducts = () => { 
  // useState Hook bizə funksiya komponentindəki vəziyyəti izləməyə imkan verir.Default olaraq birinci ALL kategoriyasi acilacaq
    const [category, setCategory] = useState("ALL");         
    const [allProducts, setAllProducts] = useState(products);
  
  
    useEffect(() => {
      if (category === "ALL") {
        setAllProducts(products);
      }
  
      if (category === "BURGER") {
        const filteredProducts = products.filter(
          (item) => item.category === "Burger"
        );
  
        setAllProducts(filteredProducts);
      }
  
      if (category === "PIZZA") {
        const filteredProducts = products.filter(
          (item) => item.category === "Pizza"
        );
  
        setAllProducts(filteredProducts);
      }
      if (category === "DRINK") {
        const filteredProducts = products.filter(
          (item) => item.category === "Drink"
        );
  
        setAllProducts(filteredProducts);
      }
      if (category === "ASIAN ") {
        const filteredProducts = products.filter(
          (item) => item.category === "Asian "
        );
  
        setAllProducts(filteredProducts);
      }
      if (category === "DESSERT") {
        const filteredProducts = products.filter(
          (item) => item.category === "Dessert"
        );
  
        setAllProducts(filteredProducts);
      }
    }, [category]);                  //Category dəyişəni yenilənirsə, effekt yenidən işləyəcək ve melumatlar deyisdirilecek

return(
  //Grid system istifade olunub.mes,Col lg=12 large device ucun sutun uzunlugunun 12 olacagini gosterir   //mt-4 margin-top 5px demekdir
<div className="allmenu">          
  <section className="menupage">           
  <Container className="allcategory">                       
    <Row className="setircategory"> 
      
      <Col lg="12">
        <div className="food__category  ">
          <button
            className={`secimadi1 ${
              category === "ALL" ? "foodBtnActive" : ""
            } `}
            onClick={() => setCategory("ALL")}
          >
            All
          </button>
          <button
            className={`secimadi  ${
              category === "BURGER" ? "foodBtnActive" : ""
            } `}
            onClick={() => setCategory("BURGER")}
          >
         
            Burger
          </button>

          <button
            className={`secimadi  ${
              category === "PIZZA" ? "foodBtnActive" : ""
            } `}
            onClick={() => setCategory("PIZZA")}
          >
    
            Pizza
          </button>

          <button
            className={`secimadi ${
              category === "DESSERT" ? "foodBtnActive" : ""
            } `}
            onClick={() => setCategory("DESSERT")}
          >
          
           Dessert
          </button>

          <button
            className={`secimadi ${
              category === "DRINK" ? "foodBtnActive" : ""
            } `}
            onClick={() => setCategory("DRINK")}
          >
          
           Drink
          </button>
          <button
            className={`secimadi ${
              category === "ASIAN " ? "foodBtnActive" : ""
            } `}
            onClick={() => setCategory("ASIAN ")}
          >
          
         Asian Foods
          </button>
        </div>
      </Col>

      {allProducts.map((item) => (
        <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">            
          <ProductCard item={item} />
        </Col>
      ))}
    </Row>
  </Container>
</section>
</div>
)
      }
export default ForProducts;