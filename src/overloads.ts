export {};

// シグネチャー
function double(value: number): number;
function double(value: string): string;

// 型宣言はシグネチャー側で行うので、関数実体ではany型でいい
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'string') {
    return value + value;
  } else {
    throw '引数の型を確認してください';
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true)); // シグネチャーにbooleanを指定していないので実行されない
