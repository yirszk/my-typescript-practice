export {};

class Person {
  // constructorの引数にアクセス修飾子をつけると初期化処理も同時にやってくれる
  constructor(public name: string, protected age: number) {}
}

const me = new Person('yau', 29);
console.log(me);
