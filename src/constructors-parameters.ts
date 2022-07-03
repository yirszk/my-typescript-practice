export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let yau = new Person('yau', 29);
console.log(yau);

type PesonType = typeof Person;

// constructorの引数が受け取れる
type Profile = ConstructorParameters<PesonType>;

// ConstructorParametersの定義
type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;
