import { link } from "fs";
import React, { useEffect, useRef, useState } from "react";
import instance from "../api/instance";
import TodoList from "../components/TodoList";

const MainTodos = () => {
  const [todoInput, setTodoInput] = useState<TodoInfo>({
    id: 0,
    content: "",
    isCompleted: false,
    userId: 0,
  });
  const [todos, setTodos] = useState<TodoInfo[]>([]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput({ ...todoInput, content: e.target.value });
  };

  const getTodos = () => {
    instance
      .get("/todos", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => setTodos(res.data));
  };

  const createTodo = () => {
    instance
      .post("/todos", todoInput, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => setTodos((prev) => [...prev, res.data]));
  };

  const deleteTodo = (id: number) => {
    instance
      .delete(`/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(() => {
        setTodos((arr) => arr.filter((i) => i.id !== id));
      });
  };

  const updateTodo = (id: number, newTodo: string) => {
    instance
      .put(`/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(() => {
        setTodos((arr) =>
          arr.filter((i) => (i.id === id ? { ...i, todo: newTodo } : i))
        );
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h2>투두 리스트</h2>
      <input onChange={onChangeHandler}></input>
      <button onClick={createTodo}>추가</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default MainTodos;
