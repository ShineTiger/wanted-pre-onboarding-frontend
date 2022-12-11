import React, { useState } from "react";
import TodoItem from "./TodoItem";

interface TodoListsProps {
  todos: TodoInfo[];
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newTodo: string, newCompleted: boolean) => void;
}

const TodoList = ({ todos, deleteTodo, updateTodo }: TodoListsProps) => {
  return (
    <div>
      <ul>
        {todos.map((i) => {
          return (
            <li key={i.id}>
              <TodoItem
                item={i}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              ></TodoItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
