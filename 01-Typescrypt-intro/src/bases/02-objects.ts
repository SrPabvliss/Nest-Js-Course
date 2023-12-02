// ts infiere el tipo de dato
export const pokemonIds = [1, 20, 30, 34, 5, 66];

pokemonIds.push(100);

interface Pokemon {
  id: number;
  name: string;
  hp: number;
  attack: number;
  alive: boolean;
  moves: string[];
}

export const charmander: Pokemon = {
  id: 1,
  name: "Charmander",
  hp: 100,
  attack: 84,
  alive: true,
  moves: ["Ember", "Scratch", "Growl", "Leer"],
};
