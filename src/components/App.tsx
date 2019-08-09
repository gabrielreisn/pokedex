import React from "react";
import { PokemonContainer } from "../containers/PokemonContainer";
import { ApplicationWrapper } from "./styles";

const App: React.FC = () => {
  return (
    <ApplicationWrapper>
      <PokemonContainer />
    </ApplicationWrapper>
  );
};

export default App;
