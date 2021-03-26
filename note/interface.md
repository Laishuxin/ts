# interface

## readonly

指明属性为可读。



## readonly vs. const

readonly: property

const: variable

```typescript
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
Lihua.name = 'xiaoming'
```



## string index

string index: won't undergo **excess** property checks

```ts
interface Animal {
  type: string;
  life: number;
}

function show(animal: Animal) {
  console.log(`type: ${animal.type}, life: ${animal.life}`)
}

show({
  type : 'dog',
  life: 20
})

show({
  type: 'cat',
  life: 20,
  // Object literal may only specify known properties, and 'leg' does not exist in type 'Animal'.
  leg: 4
})
```

For above example, leg is an excess property. The ts compiler will undergo excess property checks.

The available way to cancel this error is to use string index. Look at the following example:

```ts
interface Animal {
  type: string;
  life: number;
  [prop: string]: any
}
```





## indexable types

1. There are two types of supported index signatures: string and number. **The type returned from a numberic indexer must be a subtype of the type returned from the string index**.



```ts
interface Animal {
  leg: number
}

interface Dog extends Animal {
  eyes: number
}

interface NotOk { 
  // error
  [numberIndex: number]: Animal
  [stringIndex: string]: Dog;
  // correct
  // [numberIndex: number]: Dog;
  // [stringIndex: string]: Animal
}

// why? look at the following example: how the compiler decide to perform
// that is puzzle for the compiler
let notOk: NotOk = {}
notOk[0]
notOk["dog"]
```



2. **string index enforce that all properties match their return type**

   ```ts
   interface Animal {
       [index: string]: number;
       name: string; // <=== error
   }
   ```

   That is because `obj["name"] != obj.name`

3. readonly with indexable type

   ```ts
   console.log('--------------readonly----------------');
   interface ReadOnlyAnimal {
     readonly [index: number]: string;
   }
   
   const animals: ReadOnlyAnimal = ['xiaohuang', 'xiaohei'];
   animals[0] = 'xxx';   // error
   ```

   