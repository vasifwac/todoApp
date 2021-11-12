import React from 'react'
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'react-feather'

export default function Footer() {
    return (

        // <Row className="fixToBottom">
        //     <span className="d-flex justify-content-center mt-2" >Test@2021</span>
        // </Row>
        <div className="fixToBottom">
            <div className="content">
                <div className="socialIcons">
                    <p><Facebook /></p>
                    <p><Instagram /></p>
                    <p><Youtube /></p>
                    <p><Linkedin /></p>
                    <p><Twitter /></p>
                </div>
                <div>
                    <p>&copy; 2021-2022 All rights reserved</p>
                </div>
            </div>
        </div>
    )
}
