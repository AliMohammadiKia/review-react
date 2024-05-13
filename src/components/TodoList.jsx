import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const tasks = [
    { id: 1, title: "task #1", done: false },
    { id: 2, title: "task #2", done: true },
    { id: 3, title: "task #3", done: false },
  ];

  return (
    <div className="bg-indigo-500 p-8 rounded-md shadow-md min-w-[500px]">
      <AddTodoForm />

      <div className="mt-5">
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
