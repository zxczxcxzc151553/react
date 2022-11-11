import React, { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const TempTodoList = [...todoList];
    TempTodoList.push(todo);
    setTodoList(TempTodoList);
  };
  
  const deleteTodo = (index) => {
    const tempTodoList = [...todoList];
    tempTodoList.splice(index, 1);
    setTodoList(tempTodoList);
  };

  return (
    <div>
      <h1>부모</h1>
      <hr />
      <Child1 setData={addTodo} />
      <Child2 data={todoList} deleteData={deleteTodo} />
    </div>
  );
};

export default App;
