import React from "react";
import {  Provider } from 'urql';
import { client } from "../graphql";
import { PokemonContainer } from "../containers/PokemonContainer";

const App: React.FC = () => {
  return (
    <Provider value={client}>
      <div className="flex flex-wrap">
        <PokemonContainer />
      </div>
    </Provider>
  );
};

export default App;
