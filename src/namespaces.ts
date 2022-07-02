export {};

namespace Japanese {
  // 外からアクセスするためにはexportを置く
  export class Person {
    constructor(public name: string) {}
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public name: string
    ) {}
  }
}

const me = new Japanese.Person('yau');
console.log(me.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
