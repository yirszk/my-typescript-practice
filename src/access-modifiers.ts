export {};

// private: クラス内でのみアクセス可。インスタンスからの呼び出しができなくなる
// protected: 継承されたクラス内でのみアクセス可
class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.name);
// console.log(taro.age); // エラーが発生

// クラスの内部からの呼び出しであればアクセスできる
console.log(taro.profile());
