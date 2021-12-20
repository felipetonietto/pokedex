import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Provider} from 'react-redux'

// import store from "./store";

import Pokedex from "./pages/Pokedex/index";
import Details from "./pages/Details/index";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

// This should be my App with Redux

// const App = () => <Provider store={store}><Pokedex/></Provider> ;

// This is my App without Redux

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pokémon Codex</h1>
        </header>

        <Routes>
          <Route path="/" element={<Pokedex />}/>
          <Route path="/details"
          element={<Details /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
