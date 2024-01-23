
class newPokemon{

  constructor(
    public readonly id: number,
    public name: string,
  ){}

  scream(){
    console.log(`NO QUIERO!!!`);
  }

  speak(){
    console.log(`NO QUIERO, NO QUIERO`);
  }

}

const MyDecorator = () => {
  return (target: Function)=>{
    return newPokemon;
  }
};


@MyDecorator()
export class Pokemon {

  constructor (
    public readonly id: number,
    public name: string,
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }
}

export const charmander = new Pokemon(4, "Charmander");

charmander.scream();
charmander.speak();