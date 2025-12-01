import { useContext } from "react";
import { Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LanguageContext, ProductContext } from "../../context/Contexts";

const Header = () => {
  const {langType,lang, setLangType} = useContext(LanguageContext)

  const {cart} = useContext(ProductContext)

  const handleChange=(e)=>{
    setLangType(e.target.value)
    localStorage.setItem("lang",e.target.value)
  }

  
  return (
    <Nav className="d-flex justify-content-center fixed-top bg-light py-3 mb-5">
      <NavLink className="nav-link" to="/">
        {lang.home}
      </NavLink>
      <NavLink className="nav-link" to="/card">
        {lang.link}
      </NavLink>
      <NavLink className="nav-link" to="/basket">
        {lang.basket} {cart.length}
      </NavLink>
      <div>
        <Form.Select onChange={handleChange} value={langType} name="language">
          <option value="En">En</option>
          <option value="Uz">Uz</option>
        </Form.Select>
      </div>
    </Nav>
  );
};

export default Header;
