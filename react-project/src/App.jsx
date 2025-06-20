import { useState } from "react";
import "./App.css";
import chef from "./images/chef.jpg";
import React from "react";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>&copy; Copyright {year}</p>
    </header>
  );
}
const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  return (
    <React.Fragment>
      <h2>Today's Special Dishes</h2>
      <main>
        <img
          src={chef}
          //src="https://github.com/Lydia-at-Intel.png"
          alt="a photo of a smiling Chef owner"
          height={200}
          className="chef-image"
        />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
}

function App() {
  const [status, setStatus] = useState("Open");
  //console.log(status);
  return (
    <div>
      <h1>The restaurant is currently {status}</h1>
      <button onClick={() => setStatus("Closed")}>Close Restaurant</button>
      <Header name="Lydia" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
