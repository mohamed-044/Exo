import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
function Dish({ image, title, price, isNew }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}€</p>
      {isNew == true && <Stack direction="horizontal" gap={2}>
      <Badge bg="primary">New</Badge>
      </Stack>}
    </div>
  );
}

export default Dish;
