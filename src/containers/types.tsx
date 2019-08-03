export type queryVariables = {
  first: number;
};

export type pokemon = {
  attacks: {
    fast: [
      {
        damage: number;
        name: string;
        type: string;
      }
    ];
    special: [
      {
        damage: number;
        name: string;
        type: string;
      }
    ];
  };
  id: string;
  maxCP: number;
  maxHP: number;
  name: string;
  number: number;
  types: [string];
};

export type queryResult = {
  loading: boolean;
  error: Object;
  data: { pokemons: [pokemon] | undefined };
};
