import Dish from "./components/Dish.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Dish
          title="Tacos à l’unité"
          image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
          price={3}
        />
        <Dish
          title="Enchiladas"
          image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
          price={12}
        />
        <Dish
          title="Mole poblano"
          image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
          price={15}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
