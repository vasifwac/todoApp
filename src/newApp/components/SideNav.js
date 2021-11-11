import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import '../globalCss/style.css'
import { useNavigate } from 'react-router-dom'

export default function SideNav() {

    const navigate = useNavigate()
    const path = window.location.pathname

    return (
        <>
            <Nav className="side-nav">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav.Link active={path==='/pageOne'} onClick={() => navigate('/pageOne')}>Path One</Nav.Link>
                <Nav.Link active={path==='/pageTwo'} onClick={() => navigate('/pageTwo')}>Path Two</Nav.Link>
                <Nav.Link active={path==='/pageThree'} onClick={() => navigate('/pageThree')}>Path Three</Nav.Link>
                <Nav.Link active={path==='/pageFour'} onClick={() => navigate('/pageFour')}>Path Four</Nav.Link>
            </Nav>
        </>
    )
}
