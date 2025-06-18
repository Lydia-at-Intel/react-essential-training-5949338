import "./App.css";

function Header() {
  return (
    <header>
      <h1>Welcome to My React App</h1>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>This is a simple React application.</p>
        <p>Feel free to explore and modify the code!</p>
      </main>
      <footer>
        <p>&copy; 2023 My React App</p>
      </footer>
    </div>
  );
}

export default App;
