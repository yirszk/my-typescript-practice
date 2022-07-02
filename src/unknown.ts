export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu(); // unknown: 型安全なany

let sumAny = numberAny + 10;

console.log(typeof numberUnknown); // number

// エラーになる
// let sumUnknown = numberUnknown + 10;

// 型ガード: 型を確かめながら進める
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
