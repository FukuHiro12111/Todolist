import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

interface NAME {
  first: string;
  last: string;
}

let name2: NAME = { first: "age", last: "yame" };

let name = { first: "aki", last: "yume" };

let cdname: typeof name = { first: "ami", last: "osako" };
cdname = { first: "l", last: "k" };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};
let keySports: keyof typeof SPORTS;
keySports = "soccer";

// enum
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// ジェネリックス
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello" };
const gen1: GEN<string> = { item: "hello" };
const gen2: GEN<number> = { item: 11 };
interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: "hello" };

interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<string> = { item: "hello" };
const gen5: GEN2<number> = { item: 2 };

function funcGen<T>(props: T) {
  return { item: props };
}
const gen6 = funcGen("test");
const gen7 = funcGen(null);

function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen8 = funcGen1("hello");

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen10 = funcGen3({ price: 10 });

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
