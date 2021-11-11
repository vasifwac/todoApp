import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LogIn, User } from 'react-feather'
import { isLogin } from '../services'

export default function NavBarHead() {

    const path = window.location.pathname


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand >Logo</Navbar.Brand> */}
                <Link to="/" className="navbar-brand">
                    <img className="logo" src="https://cdn0.iconfinder.com/data/icons/man-user-human-profile-business-person-avatar/100/05A-1User_1-512.png" />
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link href="#home">Sign In</Nav.Link> */}
                        {/* {/* {!isLogin() && (<Link to="signIn" className="nav-link">Sign In</Link>)} */}
                        {/*localStorage.getItem('access')? (<Link to="/" onClick={logout} className="nav-link">Logout</Link>):""} */}
                        {path === '/' ? (<Link to="signIn" className="nav-link"><LogIn size={18} /> Sign In</Link>) : ""
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
