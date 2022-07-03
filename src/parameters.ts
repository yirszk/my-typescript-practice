export {};

const debagProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debagProfile('yau', 29);

type Profile = Parameters<typeof debagProfile>;

const profile: Profile = ['Gloria', 78];

debagProfile(...profile);

// Parameterの定義
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
