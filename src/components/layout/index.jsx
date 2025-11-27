import { Container } from "react-bootstrap";
import {  Outlet } from "react-router-dom";
import Header from "../header";

const Layout = () => {
  return (
    <Container>
    <header>
      <Header/>
    </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </Container>
  );
};

export default Layout;
