import { Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Nav className="d-flex justify-content-center fixed-top bg-light py-3 mb-5">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/card">
        Link
      </NavLink>
      <NavLink className="nav-link" to="/counter">
        Counter
      </NavLink>
      <div>
        <Form.Select name="language">
          <option value="eng">Eng</option>
          <option value="uz">Uz</option>
        </Form.Select>
      </div>
    </Nav>
  );
};

export default Header;
