import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { LogOut } from "react-feather";
import { logout } from "../services";

export default function NavBarHead() {
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg" fixed="top" sticky="top">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            alt="jsx-a11y"
            className="logo"
            src="https://cdn0.iconfinder.com/data/icons/man-user-human-profile-business-person-avatar/100/05A-1User_1-512.png"
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {location.pathname === "/signIn" ? (
              ""
            ) : !localStorage.getItem("access") ? (
              <Link to="/signIn" className="nav-link">
                Sign In
              </Link>
            ) : (
              <Link to="/signIn" onClick={logout} className="nav-link">
                <LogOut size={18} />
                Logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
