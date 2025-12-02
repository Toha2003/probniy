import { LanguageContext, ProductContext } from "../../context/Contexts";
import PropTypes from "prop-types";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { productData } from "../../data/productData";
import { toast } from "react-toastify";

function ProductCard({
  name,
  description,
  price,
  id,
  image,
  deleteIcon,
  deleteProduct,
}) {
  const { lang } = useContext(LanguageContext);

  const { setCart, cart } = useContext(ProductContext);

  const addToCart = (id) => {
    let product = productData.find((e) => e.id === id);
    setCart([...cart, product]);
    toast.success("Savatchaga qo'shildi");
  };

  let colorEdetor;
  cart.map((el) => (el.id === id ? (colorEdetor = true) : null));

  return (
    <Card
      style={{ height: 420 }}
      className="d-flex justify-content-center position-relative p-2"
    >
      {deleteIcon ? (
        <img
          onClick={() => deleteProduct(id)}
          style={{ cursor: "pointer", filter: "drop-shadow(0 0 10px white)" }}
          className="position-absolute z-1 top-0 end-0 "
          width={20}
          src={deleteIcon}
          alt=""
        />
      ) : (
        ""
      )}
      <LazyLoadImage
        className="w-100"
        effect="blur"
        style={{ height: "200px", objectFit: "cover" }}
        variant="top"
        src={image}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button
          variant={colorEdetor ? "secondary" : "primary"}
          onClick={colorEdetor ? null : () => addToCart(id)}
        >
          {lang.addCard} {id}
        </Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  image: PropTypes.string,
  deleteProduct: PropTypes.func,
  deleteIcon: PropTypes.string,
};
export default ProductCard;
