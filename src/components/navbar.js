import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withCookies } from "react-cookie";
import { Link, withRouter } from "react-router-dom";
import MusicPlayer from "./musicPlayer";

const BASE_ROUTE = "/AreaLatorApi/calculadora";

const NavBar = ({ cookies, history }) => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <Link to={`/AreaLatorApi/about`} className="linkForNav">
          AreaLator
        </Link>
      </Navbar.Brand>
      <Nav.Item>
        <Nav.Link>
          <Link to ={`${BASE_ROUTE}`} className = 'linkForNav'>
            Calculadora de areas
          </Link>
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Wiki" id="basic-nav-dropdown">
        <NavDropdown.Item>
          <Link to = {`/AreaLatorApi/wiki/cuadrado`} className = 'linkForNav'>
            Cuadrado
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to = {`/AreaLatorApi/wiki/rectangulo`} className = 'linkForNav'>
            Rectangulo
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to = {`/AreaLatorApi/wiki/triangulo`} className = 'linkForNav'>
            Triangulo
          </Link>
        </NavDropdown.Item>
      </NavDropdown>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <MusicPlayer/>
          <Navbar.Text style={{ color: "white" }}>
            {`Bienvenid@, ${cookies.get("name")} ${cookies.get(
              "lastName"
            )}`}
          </Navbar.Text>
          <Nav.Link style = {{color: "white"}}
            onClick={() => {
              cookies.set("name", "", { path: "/" });
              cookies.set("lastName", "", { path: "/" });
              window.location.href = "/AreaLatorApi";
            }}
          >
            Cerrar sesion
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withCookies(withRouter(NavBar));
