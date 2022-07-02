export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

// class Tiger extends Animal {} // 抽象クラスでないのに中身がない