// export class Pokemon {
//   public id: number;
//   public name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }

import axios from "axios";
import {
  Move,
  PokeAPIResponse,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string /*public imageUrl?:string*/
  ) {}

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  scream() {
    console.log(
      `${this.name.toUpperCase()} ${this.name.toUpperCase()} ${this.name.toUpperCase()}!!!`
    );
  }

  speak() {
    console.log(`${this.name}, ${this.name} `);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPIResponse>(
      `https://pokeapi.co/api/v2/pokemon/4`
    );
    return data.moves;
  }
}

export const charmander = new Pokemon(4, "Charmander");

// charmander.id = 2; Error
// charmander.name = "Pikachu";

charmander.scream();
charmander.speak();
console.log(charmander.getMoves());
