import React from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <Nav className="d-flex justify-content-center">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/card">
          Link
        </NavLink>
        <NavLink className="nav-link" to="/counter">
          Counter
        </NavLink>
      </Nav>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </Container>
  );
};

export default Layout;
