const query = `
  query getPokemon($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      maxHP
      maxCP
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`;

export default query;
