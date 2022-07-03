export {};

type Profile = {
  name: string;
  age?: string;
  zipCode: number;
};

// optionalで引き継ぐ
type PartialType = Partial<Profile>;

// requireedで引き継ぐ
type RequiredType = Required<Profile>;
