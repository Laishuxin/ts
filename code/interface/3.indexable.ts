interface StringArray {
  [index: number]: string;
}

let stringArr: StringArray;
stringArr = ['dog', 'cat', 'etc'];
console.log(stringArr[0]);

console.log('-------------------------------------');
interface Animal {
  leg: number;
}

interface Dog extends Animal {
  eyes: number;
}

interface NotOk {
  // error
  [numberIndex: string]: Animal;
  [stringIndex: number]: Dog;
}

// why? look at the following example: how the compiler decide to perform
// that is puzzle for the compiler
let notOk: NotOk = {};
notOk[0];
notOk['dog'];

// console.log('--------------readonly----------------');
// interface ReadOnlyAnimal {
//   readonly [index: number]: string;
// }

// const animals: ReadOnlyAnimal = ['xiaohuang', 'xiaohei'];
// animals[0] = 'xxx';   // error
