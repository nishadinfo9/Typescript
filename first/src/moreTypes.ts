const response: any = "20";
const numericLength: number = (response as string).length;

type Book = {
  name: string;
};

const bookStore = '{"name": "The alchamist"}';
const bookObject = JSON.parse(bookStore) as Book;
console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;

let val: any;
val = "nishad";
val = 20;
val = true;
val.toUpperCase();

let newVal: unknown;
newVal = "nishad";
newVal = 20;
newVal = false;
newVal.toUpperCase(); //error
if (typeof newVal === "string") newVal.toUpperCase();
if (typeof newVal === "number") newVal.toFixed(2);
if (typeof newVal === "boolean") newVal.valueOf();

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log(error);
}

const data: unknown = "nishad hasan";
const newData: string = data as string;

type Role = "user" | "admin";

function redirectedRole(role: Role): void {
  if (role === "user") {
    console.log("redirected to user dashboard");
    return;
  }
  if (role === "admin") {
    console.log("redirected to admin dashoboard");
    return;
  }
  role;
}

function neverReturn(): never { //infinite loop
  while (true) {}
}
