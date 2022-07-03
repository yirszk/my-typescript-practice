export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'yau',
  age: 29,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'John',
  age: 20,
};

// friend.age++; // エラー: readonlyのため

// readonlyを自前実装してみる
type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
