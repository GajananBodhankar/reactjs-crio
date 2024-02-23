import React, { useState } from "react";

function State() {
  const [list, setList] = useState([
    { name: "gajanan" },
    { name: "gargi" },
    { name: "Tom" },
  ]);
  return (
    <div>
      <TodoList list={list} setList={setList} />
      <AddItem list={list} setList={setList} />
      <CountTodo list={list} setList={setList} />
    </div>
  );
}

function CountTodo(props) {
  return <div>{props.list.length}</div>;
}

function TodoList(props) {
  return (
    <div>
      {props.list.map((i: any, j: any) => {
        return <p key={j}>{i.name}</p>;
      })}
    </div>
  );
}

function AddItem(props) {
  return (
    <>
      <form
        action="#"
        onSubmit={(e) => {
          props.setList([
            ...props.list,
            { name: e.target.elements.username.value },
          ]);
          e.preventDefault();
        }}
      >
        <input type="text" name="username" />
      </form>
    </>
  );
}

export default State;
