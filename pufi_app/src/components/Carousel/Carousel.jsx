import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carrousel1 from "../../assets/1.jpg"
import carrousel2 from "../../assets/2.jpg"
import carrousel3 from "../../assets/3.jpg"

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="caru">
        <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="container">
            <h1 className='containerText'>ESTAR CÓMODO, NUNCA FUE TAN FÁCIL.</h1>
            <img
            className="img1"
            src={carrousel1}
            alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="container">
            <h1 className='containerText'>PROTEGERSE DEL SOL O LLUVIA, NUNCA FUE TAN FÁCIL.</h1>
            <img
            className="img1"
            src={carrousel2}
            alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="container">
            <h1 className='containerText'>COMPRAR, NUNCA FUE TAN FÁCIL.</h1>
            <img
            className="img1"
            src={carrousel3}
            alt="Third slide"
            />
          </div>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}
