import TodoAddButton from "./TodoAddButton";
import { TodoProvider } from "./TodoContext";
import TodoItemList from "./TodoItemList";

const Todo: React.FunctionComponent = () => {
  return (
    <TodoProvider>
      <div className="w-screen min-h-screen flex flex-col p-4">
        <TodoItemList />
        <TodoAddButton />
      </div>
    </TodoProvider>
  );
};

export default Todo;
