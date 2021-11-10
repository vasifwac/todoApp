import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LogIn } from 'react-feather'

export default function NavBarHead() {

    const path = window.location.pathname


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand >Logo</Navbar.Brand> */}
                <Link to="/" className="navbar-brand">Home</Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link href="#home">Sign In</Nav.Link> */}
                        {/* {!isLogin() && (<Link to="signIn" className="nav-link">Sign In</Link>)}
                        {localStorage.getItem('access')? (<Link to="/" onClick={logout} className="nav-link">Logout</Link>):""} */}
                        {path === '/' ? (<Link to="signIn" className="nav-link"><LogIn size={18}/> Sign In</Link>) : ""}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
