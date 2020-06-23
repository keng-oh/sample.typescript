export {};

// 通常の関数
function bmi01(height: number, weight: number): number {
  return weight / (height * height);
}

// 無名関数
let bmi02: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

// アロー関数(ラムダ式)
let bmi03: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};
// let bmi03: (height: number, weight: number) => number = (
//   height: number,
//   weight: number
// ): number => weight / (height * height);

// オプショナルパラメータ
let bmi04: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

// デフォルトパラメータ
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

const reducer: (accumulator: number, currentValue: number) => number = (
  accumulator: number,
  currentValue: number
): number => {
  return accumulator + currentValue;
};

// Restパラメータ
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

// オーバーロード
function double(value: number): number; // シグネチャー
function double(value: string): string;
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'string') {
    return value + value;
  }
}
