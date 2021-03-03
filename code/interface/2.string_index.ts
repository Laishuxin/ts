interface Animal {
  type: string;
  life: number;
  [prop: string]: any
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