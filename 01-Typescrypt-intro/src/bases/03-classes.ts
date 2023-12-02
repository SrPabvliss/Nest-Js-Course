// export class Pokemon {
//   public id: number;
//   public name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }

export class Pokemon {
  constructor(public readonly id: number, public name: string) {}
}

export const charmander = new Pokemon(1, "Charmander");

// charmander.id = 2; Error
charmander.name = "Pikachu";
