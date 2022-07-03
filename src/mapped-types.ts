export {};

type Profile = { name: string; age: number };

type PartialProfile = Partial<Profile>;

// Partialの定義（１つずつ型を取り出して?を付けている）
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };