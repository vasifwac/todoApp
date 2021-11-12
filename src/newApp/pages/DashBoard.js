import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavBarHead from '../components/NavBarHead'
import SideNav from '../components/SideNav'
import '../globalCss/style.css'

export default function DashBoard() {
    return (

        <div className="sidnav">

            <NavBarHead />
            <Row >
                <Col md={2} >
                    <SideNav />
                </Col>
                <Col md={10}>
                    <h1>Dashboard</h1>
                </Col>
            </Row>
            <Footer />

            {/* <NavBarHead/>
            <SideNav/>
            <Footer/> */}
        </div>
    )
}
