function Dish({ image, title, price }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}€</p>
    </div>
  );
}

export default Dish;
