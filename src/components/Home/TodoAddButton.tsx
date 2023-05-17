import { useContext, useState } from "react";
import TodoContext from "./TodoContext";
import { sendCreateTodoRequest } from "../../API/SignInOutAPI";

const TodoAddButton: React.FunctionComponent = () => {
  const { onAddItem } = useContext(TodoContext);
  const [inputTodoState, setInputTodoState] = useState<string>("");

  const onAddHandler = () => {
    sendCreateTodoRequest({ todo: inputTodoState })
      .then((res) => {
        if (res.status === 201) {
          onAddItem(res.data);
          setInputTodoState("");
        }
      })
      .catch((err) => alert("전송 실패"));
  };
  return (
    <div className="max-w-md flex flex-row items-center justify-between">
      <input
        data-testid="new-todo-input"
        value={inputTodoState}
        onChange={(e) => setInputTodoState(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onAddHandler();
          }
        }}
        className="outline-0 border-2"
      />
      <button data-testid="new-todo-add-button" onClick={onAddHandler}>
        추가
      </button>
    </div>
  );
};

export default TodoAddButton;
