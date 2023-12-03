// export class Pokemon {
//   public id: number;
//   public name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }

import axios from "axios";

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

  async getMoves() {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/4`);
    return data;
  }
}

export const charmander = new Pokemon(4, "Charmander");

// charmander.id = 2; Error
// charmander.name = "Pikachu";

charmander.scream();
charmander.speak();
console.log(charmander.getMoves());
