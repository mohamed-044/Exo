import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import '../assets/styles/dish.scss';

function Dish({ image, title, price, isNew }) {
  return (
    <Card className="dish-card position-relative">
      <Card.Img src={image} alt={title} />
      {isNew && (
        <Badge
          bg="primary"
          className="position-absolute end-0 m-2"
        >
          Nouveau
        </Badge>
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price} €</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;
