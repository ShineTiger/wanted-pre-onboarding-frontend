import { link } from "fs";
import React, { useEffect, useRef, useState } from "react";
import instance from "../api/instance";
import TodoList from "../components/TodoList";

const MainTodos = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoInfo[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);
  // const [todosItem, setTodosItem] = useState
  const [todoContent, setTodoContent] = useState<string>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleUpdateToggle = () => {
    setIsUpdate(!isUpdate);
  };

  const quitUpdate = () => {
    setIsUpdate(false);
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
      .post(
        "/todos",
        { todo: todoInput },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
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
      {/* <ul>
        {todos.map((i) => {
          return (
            <li key={i.id}>
              <input type="checkbox" />
              {isUpdate ? (
                <>
                <input ></input>
                  <input
                    type="button"
                    value="제출"
                    onClick={() => updateTodo(i.id, i.todo)}
                  />
                  <input type="button" value="취소" onClick={quitUpdate} />
                </>
              ) : (
                <>
                  <span>{i.todo}</span>
                  <input
                    type="button"
                    value="수정"
                    onClick={handleUpdateToggle}
                  />
                  <input
                    type="button"
                    value="삭제"
                    onClick={() => deleteTodo(i.id)}
                  />
                </>
              )}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default MainTodos;
