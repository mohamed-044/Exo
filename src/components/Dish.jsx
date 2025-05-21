import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import '../assets/styles/dish.scss';

function Dish({ image, title, price, isNew }) {
  const handleClick = (message) => alert(message)
  return (
    <Card className="position-relative">
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
        <Button variant="primary" onClick={() => handleClick(`${title} ajouté au panier`)}>Ajouter au panier</Button>
      </Card.Body>
    </Card>
  );
}

export default Dish;
