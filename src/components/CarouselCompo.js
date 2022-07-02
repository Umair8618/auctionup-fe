import React from "react";

import { Carousel } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import product from "../assets/images/product/product1.png";
import product2 from "../assets/images/product/product2.png";
import product3 from "../assets/images/product/product3.png";

const CarouselCompo = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src={product}
            // src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src={product2}
            // src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src={product3}
            //src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselCompo;
