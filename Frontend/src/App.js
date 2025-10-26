import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Your one-stop shop for everything you need!</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <h2>E-Commerce Store</h2>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
