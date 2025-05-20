import Dish from "./components/Dish.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import './assets/styles/main.scss';

function App() {
  const dishes = [
    {
      title: "Tacos à l’unité",
      image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      price: 3,
      isNew: true,
    },
    {
      title: "Enchiladas",
      image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      price: 12,
      isNew: false,
    },
    {
      title: "Mole poblano",
      image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      price: 15,
      isNew: false,
    },
  ];

  return (
    <>
      <Header />
      <main className="dish-list">
        {dishes.map((dish, index) => (
          <Dish
            key={index}
            title={dish.title}
            image={dish.image}
            price={dish.price}
            isNew={dish.isNew}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
