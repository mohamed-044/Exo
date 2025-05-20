import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import '../assets/styles/dish.scss';

function Dish({ image, title, price, isNew }) {
  return (
    <div className="dish-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price} €</p>
      {isNew && (
        <Stack direction="horizontal" gap={2} className="badge-container">
          <Badge bg="primary">Nouveau</Badge>
        </Stack>
      )}
    </div>
  );
}

export default Dish;
