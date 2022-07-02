export {};

// bmi(身長, 体重, console.logで出力するかどうか)という関数をつくる
// 型の後ろに?をつけるとoptionalになる
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};
