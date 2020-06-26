export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 23, 'Japan');

class MyNumberCard {
  static isValid: boolean = true;
  // アクセス修飾子をつけると初期化してくれる
  constructor(
    private _owner: string,
    private _secretNumber: number,
    public readonly _nation: string // publicはなくてもいい
  ) {}

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  static message() {
    return `this is ${this.isValid}`;
  }
}

let card = new MyNumberCard('kenji', 12345, 'japan');

console.log(card.owner);
card.secretNumber = 12344;
console.log(card.secretNumber);
console.log(card._nation);
console.log(MyNumberCard.isValid);
console.log(MyNumberCard.message());

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export class Person {
    constructor(public name: string) {}
  }
}
const me = new Japanese.Person('Taro');
const you = new Japanese.Tokyo.Person('Taro');
console.log(me.name);
console.log(you.name);

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'i can run';
  }
}

class Lion extends Animal {
  constructor(public name: string, public speed: number) {
    super(name);
  }
  run(): string {
    return `${super.run()} ${this.speed} km/h`;
  }
}

console.log(new Animal('').run());
console.log(new Lion('king', 40).run());

abstract class Plant {
  abstract grow(): number;
}
class Flower extends Plant {
  grow(): number {
    return 9;
  }
}

interface Kenshi {}
interface Mahoutsukai {}

class Yoshihiko implements Kenshi, Mahoutsukai {}
