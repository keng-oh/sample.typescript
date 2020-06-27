export {};

let foo: any;
let str: string = 'hoge';
let num: number = 1;

foo = str;
console.log(typeof foo);
foo = num;
console.log(typeof foo);

interface Animal {
  age: number;
  // name: string;
}

class Person {
  constructor(public age: number) {}
}

let me: Animal;
me = new Person(12);

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(1));
console.log(echo<string>('hjpge'));

class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(1).echo());
console.log(new Mirror<string>('hoge').echo());
console.log(new Mirror<boolean>(true).echo());

// 型アサーション
let name: any = 'keng';
let len = name.length;
len = 'hoge';

let length = (name as string).length;
// let length = name.length as number;
// length = 'hoge';  通らない

// constアサーション
let nickname = 'hoge' as const;
// nickname = 'keng';  nicknameは'hoge'型

let profile = { name: 'Kenji', height: 177 } as const;
// ↑readonly
// profile.name = 'watashi';

let profile2: { name: string; height: number | null } = {
  name: 'kenji',
  height: null,
};
// tsconfig.json のnullableチェックをfalseにすると全体でnull許容できる

// インデックスシグネチャ
let profile3: { [index: string]: string | number } = {};
profile3.name = 'hoge';
profile3.age = 44;
profile3.nationality = 'Japan';

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean; // booleanも必要
}
// underTwentyは必須になる
let profile4: Profile = { name: 'Kenji', underTwenty: true };
