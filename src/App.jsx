import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dish from "./components/Dish.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import './assets/styles/app.scss';
import { useState } from 'react';
import { useRef, useEffect } from "react";
import useCart from './hooks/UseCart.jsx';


function App() {
    const {cartCount} = useCart();
    const prevCartCountRef = useRef(cartCount);

    useEffect(() => {
      prevCartCountRef.current = cartCount;
    }, [cartCount]);
  

  const dishes = [
    {
      title: "Tacos à l’unité",
      image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      price: 3,
      isNew: true,
      inStock : 12,
    },
    {
      title: "Enchiladas",
      image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      price: 12,
      isNew: false,
      inStock : 0,
    },
    {
      title: "Mole poblano",
      image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      price: 15,
      isNew: false,
      inStock : 5,
    },
  ];

  const [showNewOnly, setShowNewOnly] = useState(false);


  const handleShowNewOnly = () => {
    setShowNewOnly(prevState => !prevState);
  };

 

  const filteredDishes = dishes
    .filter(dish => dish.inStock > 0 && (!showNewOnly || dish.isNew))
  return (
    <>
      <Header/>
       <Container as="main">
          <Button variant="primary" onClick={handleShowNewOnly}>{showNewOnly ? "Voir tout les plats" : "Nouveautés uniquement"}</Button>
          <Row>
          {filteredDishes.map((dish, index) => (
            <Col key={index} md={4}>
              <Dish
                title={dish.title}
                image={dish.image}
                price={dish.price}
                isNew={dish.isNew}
              />
            </Col>
            
          ))}
        </Row>
        <p>Le panier est passé de {prevCartCountRef.current} articles à {cartCount} articles</p>
      </Container>
      <Footer />
    </>
  );
}

export default App;
