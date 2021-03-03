interface Person {
  readonly name: string;
  age: number;
}

const Lihua: Person = {
  name: 'lihua',
  age: 39,
}

Lihua.age = 100
// Cannot assign to 'name' because it is a read-only property.ts(2540)
// Lihua.name = 'xiaoming'