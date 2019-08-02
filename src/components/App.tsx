import React from "react";
import "./App.css";
import { PokemonContainer } from "../containers/PokemonContainer";
const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonContainer />
    </div>
  );
};

export default App;
