import React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "../graphql";
import { PokemonContainer } from "../containers/PokemonContainer";
import { ApplicationWrapper } from "./styles";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
    <ApplicationWrapper>
      <PokemonContainer />
    </ApplicationWrapper>
    </ApolloProvider>
  );
};

export default App;
