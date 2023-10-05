function ControlTodo({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <div className="flex justify-center flex-col items-center mt-12">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex w-[335px] mb-2 items-center">
            <label className="inline-flex items-center mr-2">
              <input
                checked={todo.completed}
                onChange={(e) => onToggleTodo(todo.id, e.target.checked)}
                type="checkbox"
                className="hidden"
              />
              <span
                className={`${
                  todo.completed
                    ? "bg-purple-500"
                    : "bg-white border-slate-400 border-2"
                } w-6 h-6 inline-flex items-center justify-center rounded-full`}
              >
                <svg
                  className={`${
                    todo.completed ? "" : "hidden"
                  }w-4 h-4 pt-[3px] text-white fill-current `}
                  viewBox="0 0 24 24"
                >
                  <path d="M9.293 13.293L5.293 9.293a1 1 0 0 1 1.414-1.414l3.999 3.998 7.997-7.997a1 1 0 0 1 1.414 1.414l-8.997 8.998a1 1 0 0 1-1.414 0z"></path>
                </svg>
              </span>
            </label>
            <p
              className={`${
                todo.completed ? "text-black/25" : ""
              } mr-4 font-bold `}
            >
              {todo.title}
            </p>
            <button
              onClick={() => onDeleteTodo(todo.id)}
              className="active:bg-rose-500 active:text-white border border-rose-500 px-2 text-rose-500 font-semibold pt-[2px] rounded-md"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ControlTodo;
