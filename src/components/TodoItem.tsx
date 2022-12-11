import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EditButtons, EditContent, EditInput } from "./UI/TodoItem.style";

interface TodoItemsProps {
  item: TodoInfo;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newTodo: string, newCompleted: boolean) => void;
}

const TodoItem = ({ item, deleteTodo, updateTodo }: TodoItemsProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateContent, setUpdateContent] = useState(item.todo);
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);

  const handleUpdateToggle = () => {
    setIsUpdate(!isUpdate);
  };

  const handleCompleteToggle = () => {
    setIsCompleted(!isCompleted);
  };

  const quitUpdate = () => {
    setIsUpdate(false);
  };

  const submitUpdate = () => {
    updateTodo(item.id, updateContent, isCompleted);
    handleUpdateToggle();
  };

  useEffect(() => {
    updateTodo(item.id, updateContent, isCompleted);
  }, [isCompleted]);

  return (
    <>
      <EditContent>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCompleteToggle}
        />
        <span>{item.todo}</span>
      </EditContent>
      {isUpdate ? (
        <>
          <EditInput>
            <input
              value={updateContent}
              onChange={(e) => setUpdateContent(e.target.value)}
            ></input>
          </EditInput>
          <EditButtons>
            <input
              type="button"
              value="제출"
              style={{
                background: "#02a2ff",
                border: "1px solid #02a2ff",
                color: "#fff",
              }}
              onClick={submitUpdate}
            />
            <input
              type="button"
              value="취소"
              style={{ color: "#8b0f0f", border: "1px solid #8b0f0f" }}
              onClick={() => quitUpdate()}
            />
          </EditButtons>
        </>
      ) : (
        <>
          <EditButtons>
            <input
              type="button"
              value="수정"
              style={{ background: "#9b82ff", border: "1px solid #450f8b" }}
              onClick={handleUpdateToggle}
            />
            <input
              type="button"
              value="삭제"
              onClick={() => deleteTodo(item.id)}
              style={{ background: "#ff8282", border: "1px solid #8b0f0f" }}
            />
          </EditButtons>
        </>
      )}
    </>
  );
};

export default TodoItem;
