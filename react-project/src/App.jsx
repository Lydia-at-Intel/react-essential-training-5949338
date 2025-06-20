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

function Main({ dishes, openStatus, onStatus }) {
  return (
    <React.Fragment>
      <button onClick={() => onStatus(!openStatus)}> I want to be open</button>
      <h2>Welcome to this restaurant. {openStatus ? "Open" : "Closed"}</h2>
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
  const [status, setStatus] = useState(true);
  //console.log(status);
  return (
    <div>
      <h1>The restaurant is currently {status ? "open" : "closed"}</h1>
      <button onClick={() => setStatus(!status)}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name="Lydia" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={setStatus} />
    </div>
  );
}

export default App;
