interface FruitConstructor {
  new (name: string, price: number): Fruit;
}

interface Fruit {
  name: string;
  price: number;
}

class Banana implements Fruit {
  constructor(public name: string = 'banana', public price: number) {}
  public color: string = 'yellow';
}

class Apple implements Fruit {
  constructor(public name: string = 'apple', public price: number) {}
  public source: string = 'China';
}

function createFruit(
  ctor: FruitConstructor,
  name: string,
  price: number
): string {
  const fruit = new ctor(name, price);
  return `fruit: ${fruit.name}, price: ${fruit.price}`;
}
const fruit =  createFruit(Banana, 'banana', 20)
console.log(fruit);


