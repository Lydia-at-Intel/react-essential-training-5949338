import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>Welcome {name} to My React App</h1>
      <p>Copyright &copy; {year}</p>
    </header>
  );
}

const items = ["Item 1", "Item 2", "Item 3"];

function Main({ dishes }) {
  return (
    <main>
      <h2>My React App</h2>
      <p>This is a simple React application.</p>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            {dish}
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
      <Main dishes={items} />
    </div>
  );
}

export default App;
