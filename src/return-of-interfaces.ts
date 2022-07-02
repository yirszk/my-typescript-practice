export {};

class Mahotsukai {}
class Souryo {}

// class Taro extends Mahotsukai, Souryo {} // エラー
// 複数のクラスは継承できないが、複数のインターフェースは継承のようなことが出来る

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();