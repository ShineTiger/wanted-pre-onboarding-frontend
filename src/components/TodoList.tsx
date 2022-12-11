import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { CheckboxList } from "./UI/TodoItem.style";

interface TodoListsProps {
  todos: TodoInfo[];
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newTodo: string, newCompleted: boolean) => void;
}

const TodoList = ({ todos, deleteTodo, updateTodo }: TodoListsProps) => {
  return (
    <div>
      <CheckboxList>
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
      </CheckboxList>
    </div>
  );
};

export default TodoList;
