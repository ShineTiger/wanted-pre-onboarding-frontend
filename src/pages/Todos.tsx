import { link } from "fs";
import React, { useEffect, useRef, useState } from "react";
import instance from "../api/instance";

interface TodoInfo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todos = () => {
  const [todoInput, setTodoInput] = useState<TodoInfo>({
    id: 0,
    todo: "",
    isCompleted: false,
    userId: 0,
  });
  const [todoList, setTodoList] = useState<TodoInfo[]>([]);

  const todoId = useRef(0);

  // const createTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   const newTodo = {
  //     id: (todoId.current += 1),
  //     todo: e.target.value,
  //     isCompleted: false,
  //   };
  // };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput({ ...todoInput, todo: e.target.value });
  };

  const getTodos = () => {
    instance
      .get("/todos", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => setTodoList(res.data));
  };

  const createTodo = () => {
    instance
      .post("/todos", todoInput, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => setTodoList((prev) => [...prev, res.data]));
  };

  const deleteTodo = (id: number) => {
    instance
      .delete(`/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(() => {
        setTodoList((arr) => arr.filter((i) => i.id !== id));
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <input onChange={onChangeHandler}></input>
      <button onClick={createTodo}>추가</button>
      <ul>
        {todoList.map((i) => {
          return (
            <li key={i.id}>
              <span>{i.todo}</span>
              <input type="checkbox" />
              <button>수정</button>
              <button onClick={() => deleteTodo(i.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
