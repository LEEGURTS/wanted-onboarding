import { useState } from "react";

export interface TodoItemProps {
  content: string;
  isDone: boolean;
}

export interface TodoItemEventProps {
  onCheck: () => void;
  onDelete: () => void;
  onEdit: (todo: string) => void;
}

interface TodoItemOwnProps extends TodoItemProps, TodoItemEventProps {}

const TodoItem: React.FunctionComponent<TodoItemOwnProps> = ({
  content,
  isDone,
  onCheck,
  onDelete,
  onEdit,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputTodoState, setInputTodoState] = useState<string>("");
  const cancelEdit = () => {
    setIsEdit(false);
    setInputTodoState("");
  };
  return (
    <li className="flex items-center justify-between">
      {isEdit ? (
        <>
          <label>
            <input type="checkbox" checked={isDone} onChange={onCheck}></input>
            <input
              data-testid="modify-input"
              value={inputTodoState}
              onChange={(e) => setInputTodoState(e.target.value)}
            />
          </label>
          <div>
            <button
              data-testid="submit-button"
              onClick={() => {
                onEdit(inputTodoState);
                cancelEdit();
              }}
              className="mr-2"
            >
              제출
            </button>
            <button data-testid="cancel-button" onClick={() => cancelEdit()}>
              취소
            </button>
          </div>
        </>
      ) : (
        <>
          <label>
            <input type="checkbox" checked={isDone} onChange={onCheck}></input>
            <span>{content}</span>
          </label>
          <div>
            <button
              data-testid="modify-button"
              className="mr-2"
              onClick={() => setIsEdit(true)}
            >
              수정
            </button>
            <button data-testid="delete-button" onClick={onDelete}>
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
