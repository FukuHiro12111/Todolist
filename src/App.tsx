import { FormControl, TextField, List } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import TaskItem from "./TaskItem";

const App: React.FC = () => {
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);
  const [input, setInput] = useState("");
  // firebaseにアクセスしてタスクの内容を取得
  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      );
    });
    return () => unSub();
  }, []);

  const newTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    db.collection("tasks").add({ title: input });
    setInput("");
  };

  return (
    <div className="App">
      <h1>Todo App by React/Firebase</h1>
      <FormControl>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          label="New task ?"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </FormControl>
      <button disabled={!input} onClick={newTask}>
        <AddToPhotosIcon />
      </button>

      <List>
        {tasks.map((task) => (
          <TaskItem id={task.id} title={task.title} />
        ))}
      </List>
    </div>
  );
};

export default App;

// import Data from "./data.json";

// type USERS = typeof Data;

// interface NAME {
//   first: string;
//   last: string;
// }

// let name2: NAME = { first: "age", last: "yame" };

// let name = { first: "aki", last: "yume" };

// let cdname: typeof name = { first: "ami", last: "osako" };
// cdname = { first: "l", last: "k" };

// // keyof
// type KEYS = {
//   primary: string;
//   secondary: string;
// };
// let key: keyof KEYS;
// key = "primary";

// // typeof + keyof
// const SPORTS = {
//   soccer: "Soccer",
//   baseball: "Baseball",
// };
// let keySports: keyof typeof SPORTS;
// keySports = "soccer";

// // enum
// enum OS {
//   Windows,
//   Mac,
//   Linux,
// }
// interface PC {
//   id: number;
//   OSType: OS;
// }
// const PC1: PC = {
//   id: 1,
//   OSType: OS.Windows,
// };
// const PC2: PC = {
//   id: 2,
//   OSType: OS.Mac,
// };

// // ジェネリックス
// interface GEN<T> {
//   item: T;
// }
// const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN<string> = { item: "hello" };
// const gen2: GEN<number> = { item: 11 };
// interface GEN1<T = string> {
//   item: T;
// }
// const gen3: GEN1 = { item: "hello" };

// interface GEN2<T extends string | number> {
//   item: T;
// }
// const gen4: GEN2<string> = { item: "hello" };
// const gen5: GEN2<number> = { item: 2 };

// function funcGen<T>(props: T) {
//   return { item: props };
// }
// const gen6 = funcGen("test");
// const gen7 = funcGen(null);

// function funcGen1<T extends string | null>(props: T) {
//   return { value: props };
// }
// const gen8 = funcGen1("hello");

// interface Props {
//   price: number;
// }
// function funcGen3<T extends Props>(props: T) {
//   return { value: props.price };
// }
// const gen10 = funcGen3({ price: 10 });

// const funcGen4 = <T extends Props>(props: T) => {
//   return { value: props.price };
// };
