import PropTypes from "prop-types";
import { ProductContext } from "./Contexts";
import { useState } from "react";

const ProductContextProvider = ({ children }) => {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("saveCarts"))||[])

  const state = {cart, setCart}

  localStorage.setItem("saveCarts",JSON.stringify(cart))

  return <ProductContext.Provider value={state}>{children}</ProductContext.Provider>;
};
ProductContextProvider.propTypes = {
  children: PropTypes.node,
};
export default ProductContextProvider;
