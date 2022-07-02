export {};

enum Months1 {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months1.January); // 0
console.log(Months1.February); // 1
console.log(Months1.December); // 11

// このように書くのと同じだが、enumのほうがシンプル
const MonthsJs = {
  January: 0,
  February: 1,
};

console.log(MonthsJs.January); // 0
console.log(MonthsJs.February); // 1

// 1から始めることもできる
enum Months2 {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
}

let red = COLORS.RED;
console.log({ red });

// enumに要素を付け足すことも出来る
enum COLORS {
  YELLOW = '#FFFF00',
}

let yellow = COLORS.YELLOW;
console.log({ yellow });