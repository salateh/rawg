/*Readonly
interface User {
  readonly id: number;
  name: string;
}


const user: User = {id:1, name:"John"}
user.id = 2

type DeepReadonlyUser = Readonly<{ id: number; name: string }>;

const users: readonly DeepReadonlyUser[] = [{ id: 1, name: "" }];
users[0]?.id = 2 // <-- нельзя, т.к. readonly*/
/* Optional
interface Product {
  title: string;
  description?: string
}

function greet(name?:string) {
  console.log(name ?? "!");
  
}
greet("s")*/
/* Union type

let value: string | number
value = "hello"
value = 42
value = false*/
/* Intersection type

///// by Types:
type A = { name: string };
type B = { age: number };

type Person = A & B

const p: Person = {name: "Alex", age:30}

//// by Interface:
interface A {
  name: string;
}
interface B {
  age: number;
}

interface Person extends A, B {
  Iq: number
}


const p:Person = {name:"",age:22, Iq: 126}
*/
/* As (type assertation)

let value = "string" as string

let input = document.querySelector("input") as HTMLInputElement
*/
/* In (Mapped types)

type Keys = "a" | "b";

type Flags = { [K in Keys]: boolean };

const obj: Flags = {
  a: true,
  b: false,
};


*/
/* ! (Non-null assertion)

const el = document.querySelector("div")!
const input = document.querySelector("input");

input!.focus()

const value: string | null = getValue()

// console.log(value.length);  <- пишет ошибку

console.log(value!.length);  // <-- правильно

// console.log(user.profile!.name!.toUpperCase());

 // Альтернатива:
// if (user.profile?.name) {
//   console.log(user.profile.name.toUpperCase());
  
// }
if ("experience" in member) {
  // Внутри этого блока TS магическим образом поймет,
  // что member — это точно Employee.
  console.log(member.experience);
}

*/
/* ??= (nullish assigment)

let x: string |undefined;
x ??= "default"

console.log(x);

let y: string | undefined = "James"

y ??= "default name"
console.log(y);
*/
/* /// Enum
enum UserRole {
  Admin = "admin",
  Manager = "manager",
  Guest = "guest",
}

function getUserRole() {
  return "admin";
}

const userRole = getUserRole();

if (userRole === UserRole.Admin) console.log("a");

enum HttpStatusCode {
  OK = 200,
  NotFound = 400,
  InternalServerError = 500,
}


async function fetchUserData(userId: number) {
    const response = await fetch(`/api/users/${userId}`);

    if (response.status === HttpStatusCode.OK) {
        const data = await response.json();
        console.log('User loaded', data);
    } else if (response.status === HttpStatusCode.NotFound) {
        console.error('User not found.');
    } else if (response.status === HttpStatusCode.InternalServerError) {
        console.error('Server error.');
    } else {
        console.warn('Unhandled status code:', response.status);
    }
}
  */
/* /// Дженерики
///////////////Пример на классах 1///////////////////
class StorageContainer<T> {
  private contents: T[];

  constructor() {
    this.contents = [];
  }

  addItem(item: T): void {
    this.contents.push(item);
  }
  getItem(index: number): T | undefined {
    return this.contents[index];
  }
}

const userNames = new StorageContainer<string>();
userNames.addItem("Петр1");
userNames.addItem("Петр2");
userNames.addItem("Петр3");
userNames.addItem("Петр4");

console.log(userNames.getItem(2));

const nmbrs = new StorageContainer<number>();
nmbrs.addItem(5);
nmbrs.addItem(5);
nmbrs.addItem(5);
nmbrs.addItem(5);
console.log(nmbrs.getItem(1));

/////////////Пример на типах и интерфейсах 1/////////////////////
const valueFactory = (x: number) => x;
const myValue = valueFactory(11);

type TypeFactory<X> = X;
type MyType = TypeFactory<string>;

interface ValueContainer<Value> {
  value: Value;
}
type StringContainer = ValueContainer<string>;

const x: StringContainer = {
  value: "",
};
//////////////////////////////////

///////////////Пример на классах 2///////////////////
class ArrayOfAny<Type> {
  constructor(public collection: Type[]) {}

  get(index: number): Type | undefined {
    return this.collection[index];
  }
}

new ArrayOfAny<string>(["1", "2", "3"]);
///////////////Пример на функциях 1///////////////////

function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function printNum(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAny<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printAny<number>([1, 2, 3, 4, 5]);
//////////////////////////////////
///////////////Пример на функциях 2///////////////////
function fillArray<T>(len: number, el: T): T[] {
  return new Array<T>(len).fill(el);
}

const arr1 = fillArray<string>(10, "*");
console.log(arr1);

//////////////////////////////////
/////////////Пример на типах и интерфейсах 1/////////////////////

interface Array0<T> {
  concat(...items: (T | T[])[]): T[];

  reduce<U>(
    callback: (state: U, element: T, index: number, array: T[]) => U,
    firstState?: U,
  ): U;
}

interface Lengthwise {
  length: number;
}

function printLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

printLength([1]);
//////////////////////////////////
/////////////Пример на типах и интерфейсах 1/////////////////////

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const myObj = {
  a: 1,
  b: 2,
  c: 3,
};

getProperty(myObj, "a");

// K === "a","b","c"

////////////////////////////////// */
/* /// Tuple

const fsa: [number, number, number, number] = [1, 2, 2, 3];
*/
/* /// typeof, keyof

////keyof////

type OOO = {
  name: string;
  age: number;
};
const aaaa: keyof OOO = "age";

////.......//////

////typeof////

const SETTINGS = {
  max: 5000,
  constrols: ["play", "pause"],
};

type Settings = typeof SETTINGS;

function renderVideoElement(
  settings: Settings  можно написать просто - typeof SETTINGS,
) {}
renderVideoElement({ max: 500, constrols: ["dasd", "dada"] });

////.......//////
function test() {
  return 10;
}

type Handler = typeof test;
type Handler2 = ReturnType<typeof test>;





////.......//////


interface Car {
  name: string;
  old: number;
  id: number;
  isNew: boolean;
  owners: string[];
}
const bmw: Car = {
  name: "M5 F90",
  id: 121,
  isNew: true,
  old: 1,
  owners: ["Muhamad", "Ali"],
};

function processField<T, K extends keyof T>(
  obj: T,
  key: K,
  callback: (val: T[K]) => T[K],
) {
  obj[key] = callback(obj[key]);
  return obj;
}

processField(bmw, "id", (curvalue) => curvalue + 111);
console.log(bmw);


////.......//////

type GetUserBalanceReturnData = {
  id: number;
  balance: number;
  currency: "rub" | "usd";
};

function getUserBalance(id:number,name:string): GetUserBalanceReturnData {
  return { id: 0, balance: 123, currency: "rub" };
}

type Params = Parameters<typeof getUserBalance>

const balance = getUserBalance(10,"");


function renderBalance(info: ReturnType<typeof getUserBalance>) {
  return `${info.balance} ${info.currency}`;
}
renderBalance(balance);

////.......//////


interface IBox<T> {
  add(...params: T[]): void;

  getValue(index: number): T | undefined;

  count(): number | undefined;
}

class StorageBox<T> implements IBox<T> {
  constructor(private items: T[] = []) {}

  add(...params: T[]): void {
    this.items.push(...params);
  }
  getValue(index: number): T | undefined {
    return this.items[index];
  }

  count(): number | undefined {
    return this.items.length;
  }
}

const strBox = new StorageBox<string>();

strBox.add("12", "1", "1", "2", "3", "12");

console.log(strBox.getValue(2));
console.log(strBox.count());

////.......//////
interface IHasId {
  id: number;
}
class IdentifiableStorage<T extends IHasId> {
  constructor(private item: T[]) {}

  findById(id: number) {
    console.log(this.item.find((items) => items.id === id));
  }
}

const ooo2 = new IdentifiableStorage<IHasId>([{ id: 121 }]);

ooo2.findById(121);

interface Car {
  name: string;
  old: number;
  id: number;
  isNew: boolean;
  owners: string[];
}
const bmw: Car = {
  name: "M5 F90",
  id: 121,
  isNew: true,
  old: 1,
  owners: ["Muhamad", "Ali"],
};

function processField<T, K extends keyof T>(
  obj: T,
  key: K,
  callback: (val: T[K]) => T[K],
): T {
  obj[key] = callback(obj[key]);
  return obj;
}

processField(bmw, "id", (curvalue) => curvalue + 111);
console.log(bmw);

interface IUser {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  save(): void;
  logout(): void;
}
const user: IUser = {
  id: 1231,
  email: "fadqda",
  name: "dadsasda",
  role: "admin",
  save() {
    console.log(`${this.name} Сохранен`);
  },
  logout() {
    console.log(`${this.name} Вышел`);
  },
};

function updateProfile<T extends { save: () => void }, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K],
) {
  if (typeof obj[key] !== "function") {
    obj[key] = value;
    obj.save();
  }
}

updateProfile(user, "role", "user");

*/ 
//# sourceMappingURL=index.js.map