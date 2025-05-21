import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
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
        <button type="button" className="btn btn-dark" onClick={() => handleClick(`${title} ajouté au panier`)}>Ajouter au panier</button>
      </Card.Body>
    </Card>
  );
}

export default Dish;
