export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = { name: 'Ham', age: 36 };

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = { name: 'Ham', age: 36 };

type Profile2 = typeof example1