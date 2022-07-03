export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile = Omit<SimpleProfile, 'height'>

// Omitの定義
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type MySmallProfile = MyOmit<DetailedProfile, 'height'>