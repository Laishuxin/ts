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

