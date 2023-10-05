import { Plus } from "phosphor-react";

function CreateTodo({ onNewItemInput, onItemSubmit, inputItem }) {
  return (
    <div className="mt-7">
      <form onSubmit={(e) => onItemSubmit(e)}>
        <div className="flex px-3 justify-between">
          <h1 className="text-4xl font-black">ToDo List</h1>
          <button className="border-none rounded-3xl px-2 bg-purple-500">
            <Plus size={25} weight="bold" color="white" />
          </button>
        </div>
        <div className="w-full mt-6 flex justify-center">
          <input
            placeholder="Make Todo..."
            value={inputItem}
            onChange={(e) => onNewItemInput(e.target.value)}
            type="text"
            className="border-none focus:outline-none px-3 text-slate-800 bg-slate-200 w-[335px] h-11 rounded-md"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTodo;
