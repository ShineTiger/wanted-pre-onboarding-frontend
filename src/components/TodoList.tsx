import React, { useState } from "react";

interface TodoListsProps {
  todos: TodoInfo[];
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newTodo: string) => void;
}

const TodoList = ({ todos, deleteTodo }: TodoListsProps) => {
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <div>
      <ul>
        {todos.map((i) => {
          return (
            <li key={i.id}>
              <span>{i.todo}</span>
              <input type="checkbox" />
              {isUpdate ? (
                <>
                  <input type="button" value="제출" />
                  <input type="button" value="취소" />
                </>
              ) : (
                <>
                  <input type="button" value="수정" />
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
      </ul>
    </div>
  );
};

export default TodoList;
