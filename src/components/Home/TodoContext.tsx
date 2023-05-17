import { createContext, useState } from "react";

export interface TodoState {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodoAction {
  onCheckItem: (idx: number) => void;
  onRemoveItem: (idx: number) => void;
  onAddItem: (todo: TodoState) => void;
  onEditItem: (idx: number, todo: string) => void;
  setTodoList: (todo: TodoState[]) => void;
}

interface TodoContextProps extends TodoAction {
  todoList: TodoState[];
}

const TodoContext = createContext<TodoContextProps>({
  todoList: [],
  onCheckItem: () => {},
  onRemoveItem: () => {},
  onAddItem: () => {},
  onEditItem: () => {},
  setTodoList: () => {},
});

export const TodoProvider = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  const [todoList, setTodoList] = useState<TodoState[]>([]);

  const onAddItem = (todo: TodoState) => {
    setTodoList([...todoList, todo]);
  };

  const onRemoveItem = (idx: number) => {
    setTodoList(todoList.filter((item) => item.id !== idx));
  };

  const onCheckItem = (idx: number) => {
    setTodoList(
      todoList.map((todo, index) =>
        index === idx ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const onEditItem = (idx: number, inputTodo: string) => {
    setTodoList(
      todoList.map((item, index) =>
        index === idx ? { ...item, todo: inputTodo } : item
      )
    );
  };
  return (
    <TodoContext.Provider
      value={{
        todoList,
        onAddItem,
        onRemoveItem,
        onCheckItem,
        setTodoList,
        onEditItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
