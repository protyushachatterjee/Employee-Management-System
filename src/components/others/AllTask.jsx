import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
 
  return (
    <div
      
      className="bg-[#1C1C1C] p-5 mt-16 rounded h-72 "
    >
        <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded" >
        <h2 className="w-1/5 font-semibold text-yellow-50">Employee Name</h2>
        <h3 className="w-1/5 font-semibold text-yellow-50">New Task</h3>
        <h5 className="w-1/5 font-semibold text-yellow-50">Active Task</h5>
        <h5 className="w-1/5 font-semibold text-yellow-50">Complete Task</h5>
        <h5 className="w-1/5 font-semibold text-yellow-50">Failed Task</h5>
      </div>
      <div id="alltask" className="h-[80%] overflow-auto">     
      {userData?.map(function(elem, idx){
        return <div key={idx} className="bg-zinc-700 mb-2 py-2 px-4 flex justify-between rounded" >
        <h2 className="w-1/5 font-semibold text-lg">{elem.firstName}</h2>
        <h3 className="w-1/5 text-blue-400 font-semibold text-xl">{elem.taskCount.newTask}</h3>
        <h5 className="w-1/5 text-orange-400 font-semibold text-xl">{elem.taskCount.active}</h5>
        <h5 className="w-1/5 text-green-400 font-semibold text-xl">{elem.taskCount.completed}</h5>
        <h5 className="w-1/5 text-red-400 font-semibold text-xl">{elem.taskCount.failed}</h5>
      </div>
      })}
      </div>
    </div>
  );
};

export default AllTask;
