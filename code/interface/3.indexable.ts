interface StringArray {
  [index: number]: string
}

let stringArr: StringArray;
stringArr = ["dog", "cat", "etc"]
console.log(stringArr[0])