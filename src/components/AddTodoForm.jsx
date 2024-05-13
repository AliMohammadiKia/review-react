const AddTodoForm = () => {
  return (
    <div className="flex gap-x-2 justify-center">
      <input
        type="text"
        name="task"
        id="task"
        className="outline-none py-1 px-2 rounded-md text-indigo-800"
      />
      <button className="bg-indigo-500 text-white border-2 border-white py-1 px-2 rounded-md outline-none">
        Add Todo
      </button>
    </div>
  );
};

export default AddTodoForm;
