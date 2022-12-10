import React, { useState } from "react";

interface TodoListsProps {
  todos: TodoInfo[];
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newTodo: string) => void;
}

const TodoList = ({ todos, deleteTodo, updateTodo }: TodoListsProps) => {
  const [isUpdate, setIsUpdate] = useState(false);

  const handleUpdateToggle = () => {
    setIsUpdate(!isUpdate);
  };

  const handleCancelUpdate = () => {
    setIsUpdate(false);
  };

  return (
    <div>
      <ul>
        {todos.map((i) => {
          return (
            <li key={i.id}>
              <input type="checkbox" />
              {isUpdate ? (
                <>
                  <input
                    type="button"
                    value="제출"
                    onClick={() => updateTodo(i.id, i.todo)}
                  />
                  <input type="button" value="취소" />
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
      </ul>
    </div>
  );
};

export default TodoList;
