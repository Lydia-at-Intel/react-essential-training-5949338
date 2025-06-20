import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>Welcome {name} to My React App</h1>
      <p>Copyright &copy; {year}</p>
    </header>
  );
}

const items = ["Item 1", "Item 2", "Item 3", "Minestrone Soup"];

// forming data before rendering it makes it more stable and faster to process
// keeps it in sync
const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

console.log("Dish Objects:", dishObjects);

function Main({ dishes }) {
  return (
    <main>
      <h2>My React App</h2>
      <p>This is a simple React application.</p>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyleType: "none" }}>
            {dish.title}
          </li>
        ))}
      </ul>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header name="Fred" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
