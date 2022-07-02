export {};

// nullはユニオン型で許容する
let profile: { name: string; age: number | null} = {
  name: 'yau',
  age: null
};
