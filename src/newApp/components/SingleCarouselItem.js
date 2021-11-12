import React from "react";
import { Carousel } from "react-bootstrap";

export default function SingleCarouselItem({ item }) {
  console.log(item);
  return (
    <Carousel.Item>
      <img
        className="d-block w-100 object-fit-cover"
        src={item.src}
        alt={item.alt}
      />
      <Carousel.Caption>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}
