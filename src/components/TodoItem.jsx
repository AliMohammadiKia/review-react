const TodoItem = ({ task }) => {
  return (
    <div className="bg-indigo-100 my-2 rounded-md flex justify-between p-2">
      <p>{task.title}</p>
      <div>
        <i className="cursor-pointer">✏️</i>
        <i className="cursor-pointer">❌</i>
      </div>
    </div>
  );
};

export default TodoItem;
