import { pokemonTagType, imageUrlFromPokemonId } from "../index";

describe("pokemonTagType", () => {
  it("returns the correct hex color according to the pokemon type if correctly identified", () => {
    expect(pokemonTagType("Normal")).toEqual("#A8A878");
  });
  it("returns the fallback option in case the type is not listed", () => {
    expect(pokemonTagType("????")).toEqual("#68A090");
  });
});

describe("imageUrlFromPokemonId", () => {
  it("fetches the img based on the pokemon id", () => {
    const id = 5;
    const result =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/5.png";
    expect(imageUrlFromPokemonId(id)).toEqual(result);
  });
});
