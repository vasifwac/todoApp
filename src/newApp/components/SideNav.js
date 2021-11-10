import React from 'react'
import { Nav } from 'react-bootstrap'
import '../globalCss/style.css'
import { useNavigate } from 'react-router-dom'

export default function SideNav() {

    const navigate = useNavigate()

    return (
        <>
            <Nav className="side-nav">
                <Nav.Link onClick={() => navigate('/pageOne')}>Path One</Nav.Link>
                <Nav.Link onClick={() => navigate('/pageTwo')}>Path Two</Nav.Link>
                <Nav.Link onClick={() => navigate('/pageThree')}>Path Three</Nav.Link>
                <Nav.Link onClick={() => navigate('/pageFour')}>Path Four</Nav.Link>
            </Nav>
        </>
    )
}
