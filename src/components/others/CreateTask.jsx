import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescrip, setTaskDescrip] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();

   const task={
      taskTitle,
      taskDate,
      taskDescrip,
      taskCategory,
      asignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userData.map(elem => {
      if (asignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, task],
          taskCount: {
            ...elem.taskCount,
            newTask: elem.taskCount.newTask + 1
          }
        };
      }
      return elem;
    });
    setUserData(data);
    

    setTaskTitle("");
    setTaskCategory("");
    setAsignTo("");
    setTaskDate("");
    setTaskDescrip("");
  };

  return (
    <div className="p-12 bg-[#1C1C1C] mt-10 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-2"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-2"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Asign to</h3>
            <input
              value={asignTo}
              onChange={(e) => {
                setAsignTo(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-2"
              type="text"
              placeholder="employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              value={taskCategory}
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-2"
              type="text"
              placeholder="Design, Dev etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            value={taskDescrip}
            onChange={(e) => {
              setTaskDescrip(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]"
            cols={30}
            rows={10}
          ></textarea>
          <button className="bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
