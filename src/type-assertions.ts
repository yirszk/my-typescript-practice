export {};

let name: any = 'yau'

let length = (name as string).length;
// let length = (<string>name).length; // 非推奨
console.log(length);