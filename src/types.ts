export {};

let message: string = 'Hello, world.'; // 文字列
let year: number = 1993; // 数値
let numbers: number[] = [1, 2, 3]; // 配列
let array: Array<number> = [1, 2, 3]; // 配列2
let arrays: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
]; // 多重配列
let severalvar: (string | number | number[])[] = [message, year, numbers]; // いろんな型の配列
let tuple: [string, number] = [message, year]; //　タプル

function returnNothing(): void {}
returnNothing(); // void

let absence: null = null; // null
let data: undefined = undefined; // undefined

function error(message: string): never {
  throw new Error(message);
} // never型
try {
  let result = error('message');
} catch (error) {}

// オブジェクト型
let obj: object = { name: 'keng' };
let obj2: { name: string; age: number } = { name: 'keng', age: 100 };

// 型のエイリアス
type Mojiretsu = string;
let moji: Mojiretsu = message;

type Profile = { name: string; age: number };
const profile: Profile = obj2;

// 型は？
type Profile2 = typeof profile;
const profile2: Profile2 = profile;

// オブジェクトの型に名前をつける
type ObjectType = { name: string; age: number };
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = { name: 'keng', age: 27 };

// unknown型
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

// intersection(交差)型
type Pitcher1 = { throwingSpeed: number };
type Batter1 = { battingAvg: number };
const sasaki: Pitcher1 = { throwingSpeed: 154 };
const ochiai: Batter1 = { battingAvg: 0.367 };
type TwoWayPlayer = Pitcher1 & Batter1;
const ohtani: TwoWayPlayer = { throwingSpeed: 165, battingAvg: 0.286 };

// union(共用体)型
let value: number | string = 0;
value = 'foo';

// literal型
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;

// enum
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}
Months.January;

enum COLORS {
  RED = '#FF0000',
  GREEN = '#00FF00',
  BLUE = '#FF0000',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
}
COLORS.GREEN;
enum COLORS {
  YELLOW = '#FFFF00',
}
COLORS.YELLOW;
