export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Yoichiro';
  static lastName: string = 'Suzuki';

  static work() {
    return `Hey, ${this.firstName}! Let's dive into TypeScript!`
  }
}

let me = new Me();
// console.log(me.isProgrammer); // エラー: 静的メンバーにはアクセスできない
console.log(Me.isProgrammer); // インスタンス化しなければアクセスできる
console.log(Me.work());