import React from "react";
import "../globalCss/style.css";
import { Carousel, Row, Container } from "react-bootstrap";

export default function Carousels() {
  const data = [
    {
      src: "https://i.pinimg.com/originals/7f/f5/aa/7ff5aa2204c532c80dcc425080aeb1be.jpg",
      alt: "First slide",
      title: "First slide label",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      src: "https://wallpaperbat.com/img/90735-animated-landscape-2560x1440-wallpaper.png",
      alt: "Second slide",
      title: "Second slide label",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      src: "https://wallpapercave.com/wp/7eKbNsz.jpg",
      alt: "Third slide",
      title: "Third slide label",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];

  return (
    <Row className={{ style: "50vh" }}>
      <Container>
        <Carousel className="carousel h-50 mt-50 inline-block ">
          {data.map((item) => (
            <Carousel.Item key={item.title} style={{height:'500px'}}>
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
          ))}
        </Carousel>
      </Container>
    </Row>
  );
}
