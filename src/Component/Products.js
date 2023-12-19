import React, { Fragment } from "react";
import Color from "./Color";
import Navbar from "./Navbar";
import Navbav2 from "./Navbar2";
import { Button } from "react-bootstrap";
const Products = () => {
  const productsArr = [
    {
      id: "1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      id: "5",
      title: "shirt",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    },
    {
      id: "6",
      title: "Cofee",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    },
  ];
  const Items = productsArr.map((item) => (
    <Color
      key={item.id}
      id={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
    />
  ));
  //   <Album productsArr={productsArr} />;
  return (
    <div>
      <Navbar />
      <Navbav2 />
      <Fragment>{Items}</Fragment>
      <div className="text-center m-5">
      <Button variant="info" className="p-3 m-auto shadow">See the Cart</Button> 
      </div>
    </div>
  );
};

export default Products;
