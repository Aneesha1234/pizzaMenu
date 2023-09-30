import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { logDOM } from "@testing-library/react";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header style={style} className="header">
      {" "}
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
     
      {numPizzas > 0 ? (
        <>
          
       <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our
       stone oven, all organic, all delicious.
     </p>
        <ul className="pizzas">
          {pizzas.map((item) => (
            <Pizza
            key={item.name}
            name={item.name}
            ingredients={item.ingredients}
            price={item.price}
            photoName={item.photoName}
            soldOut={item.soldOut}
            />
            ))}
        </ul>
      </>
      ) : (
        <p> we are still working on our menu.Come back later</p>
      )}
    </main>
  );
}
function Pizza(props) {
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" :""}`}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name} </h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "Sold OUT" : props.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const startHour = 16;
  const endHour = 22;
  const isOpen = hour >= startHour && hour <= endHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order endHour={endHour} />
      ) : (
        <p>
          We are happy to welcome you between{startHour}:00 and {endHour}:00
        </p>
      )}
    </footer>
  );
}
const Order = (props) => {
  return (
    <div className="order">
      <p>We are open until {props.endHour}:00.Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
