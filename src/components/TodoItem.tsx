import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCompleteToggle}
      />
      {isCompleted ? <span>완료</span> : <span></span>}
      {isUpdate ? (
        <>
          <input
            value={updateContent}
            onChange={(e) => setUpdateContent(e.target.value)}
          ></input>
          <input type="button" value="제출" onClick={submitUpdate} />
          <input type="button" value="취소" onClick={() => quitUpdate()} />
        </>
      ) : (
        <>
          <span>{item.todo}</span>
          <input type="button" value="수정" onClick={handleUpdateToggle} />
          <input
            type="button"
            value="삭제"
            onClick={() => deleteTodo(item.id)}
          />
        </>
      )}
    </>
  );
};

export default TodoItem;

const checkBox = styled.span``;
