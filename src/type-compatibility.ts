export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;

// fooInCompatible = barInCompatible; // エラー: 型の互換性がないため

let fooString: string;
let barString: string = 'TypeScript';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral; // 文字列リテラル型は文字列型の一部（互換性がある）

let fooNumber: number;
let fooNumberLiteral: 1992 = 1992;
fooNumber = fooNumberLiteral; // 数値リテラル型は数値型の一部（互換性がある）

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

// AnimalとPersonは互換性がある（構造的部分型: 代入するオブジェクトが一致している）
let me: Animal;
me = new Person(29, 'yau');