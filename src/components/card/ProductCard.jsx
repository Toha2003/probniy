import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({name, description, price, id, image}) {
  return (
    <Card style={{height:420}} className=''>
      <Card.Img style={{height:"200px", objectFit:"cover"}} variant="top" src={image} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title >{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
            {price}
        </Card.Text>
        <Button variant="primary">Add cart {id}</Button>
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