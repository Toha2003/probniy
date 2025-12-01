import { LanguageContext, ProductContext } from '../../context/Contexts';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { productData } from '../../data/productData';

function ProductCard({name, description, price, id, image}) {
  const [savedProducts, setSavedProducts] = useState(false)

  const {lang} = useContext(LanguageContext)

  const {setCart, cart} = useContext(ProductContext)

  const addToCart = (id)=>{
   let product= productData.find((e)=>e.id===id)
   setCart([...cart, product])   
  }

 
  
  cart.map((el)=>{
    // if(el.id===id){
    //   setSavedProducts(true)
    // }
    console.log(el);

  })

  
  return (
    <Card style={{height:420}} className='d-flex justify-content-center'>
      <LazyLoadImage className='w-100' effect="blur" style={{height:"200px", objectFit:"cover"}} variant="top" src={image} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title >{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
            {price}
        </Card.Text>
        <Button variant={savedProducts?"secondary":"primary"} onClick={()=>addToCart(id)}>{lang.addCard} {id}</Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes={
    name:PropTypes.string,
    description:PropTypes.string,
    price:PropTypes.number,
    id:PropTypes.number,
    image:PropTypes.string 
}
export default ProductCard;