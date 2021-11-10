import React from 'react';
import '../globalCss/style.css'
import { Carousel, Row, Container } from 'react-bootstrap'

export default function Carousels() {
    return (
        <Row className={{ style: "50vh" }}>
            <Container>
                <Carousel className="carousel h-50 mt-50 inline-block " >
                    <Carousel.Item style={{ height: '300px' }}>
                        <img
                            className="d-block w-100 object-fit-cover"
                            src="https://i.pinimg.com/originals/7f/f5/aa/7ff5aa2204c532c80dcc425080aeb1be.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: '300px' }}>
                        <img

                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/69/e0/79/69e0792fe3ef5ae8992c2a1c155bea12.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: '300px' }}>
                        <img
                            className="d-block w-100"
                            src="https://www.wallpapers13.com/wp-content/uploads/2015/11/Tower-for-surveillance-of-forest-fire-night-nature-landscape-Wallpaper-HD-1920x1080.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </Row>
    )
}
