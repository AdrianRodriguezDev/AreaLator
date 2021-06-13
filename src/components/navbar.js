import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withCookies } from "react-cookie";
import { Link, withRouter } from "react-router-dom";

const BASE_ROUTE = "/AreaLatorApi/calc";

const NavBar = ({ cookies, history }) => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <Link to={BASE_ROUTE} className="linkForNav">
          AreaLator
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Navbar.Text style={{ color: "white" }}>
            {`Ha iniciado sesion como: ${cookies.get("name")} ${cookies.get(
              "lastName"
            )}`}
          </Navbar.Text>
          <Nav.Link
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
