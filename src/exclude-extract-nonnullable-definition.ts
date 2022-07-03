export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FuctionType = Exclude<SomeTypes, string | number>;

// excludeを自前実装
type MyExclude<T, U> = T extends U ? never : T
type MyFunctionType = MyExclude<SomeTypes, DebugType>

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>