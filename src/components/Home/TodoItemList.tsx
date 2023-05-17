import { useContext, useEffect } from "react";
import TodoContext, { TodoState } from "./TodoContext";
import TodoItem from "./TodoItem";
import {
  sendDeleteTodoRequest,
  sendGetTodoRequest,
  sendUpdateTodoRequest,
} from "../../API/SignInOutAPI";

const TodoItemList: React.FunctionComponent = () => {
  const Todo = useContext(TodoContext);

  useEffect(() => {
    sendGetTodoRequest().then((res) => {
      if (res.status === 200) {
        Todo.setTodoList(res.data);
        console.log(res.data);
      }
    });
  }, []);

  const onCheckHandler = (item: TodoState, id: number) => {
    sendUpdateTodoRequest(item.id, {
      ...item,
      isCompleted: !item.isCompleted,
    })
      .then((res) => {
        if (res.status === 200) {
          Todo.onCheckItem(id);
        }
      })
      .catch((err) => alert("전송 실패"));
  };

  const onDeleteHandler = (id: number) => {
    sendDeleteTodoRequest(id)
      .then((res) => {
        if (res.status === 204) {
          Todo.onRemoveItem(id);
        }
      })
      .catch((err) => alert("삭제 실패"));
  };

  const onEditHandler = (item: TodoState) => (inputTodo: string) => {
    console.log(item, inputTodo);
    sendUpdateTodoRequest(item.id, { ...item, todo: inputTodo })
      .then((res) => {
        if (res.status === 200) {
          Todo.onEditItem(item.id, inputTodo);
        }
      })
      .catch((err) => alert("수정 실패"));
  };
  return (
    <main className="max-w-md flex flex-col">
      {Todo.todoList.map((item, idx) => (
        <TodoItem
          content={item.todo}
          isDone={item.isCompleted}
          key={idx}
          onCheck={() => onCheckHandler(item, idx)}
          onDelete={() => onDeleteHandler(item.id)}
          onEdit={onEditHandler(item)}
        />
      ))}
    </main>
  );
};

export default TodoItemList;
