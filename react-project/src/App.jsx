import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>Welcome {name} to My React App</h1>
      <p>Copyright &copy; {year}</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header name="Fred" year={new Date().getFullYear()} />
      <main>
        <p>This is a simple React application.</p>
        <p>Feel free to explore and modify the code!</p>
      </main>
      <footer>
        <p>My React App</p>
      </footer>
    </div>
  );
}

export default App;
