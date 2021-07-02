import React from "react";
import {  Provider } from 'urql';
import { client } from "../graphql";
import { PokemonContainer } from "../containers/PokemonContainer";
import { ApplicationWrapper } from "./styles";

const App: React.FC = () => {
  return (
    <Provider value={client}>
      <ApplicationWrapper>
        <PokemonContainer />
      </ApplicationWrapper>
    </Provider>
  );
};

export default App;
