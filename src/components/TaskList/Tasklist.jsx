import React from "react";
import AcceptTask from "./AcceptTask";
import New from "./New";
import CompleteTask from "./CompleteTask";
import Failedtask from "./Failedtask";
import RenderTask from "./RenderTask";

const Tasklist = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full py-5 overflow-x-auto mt-20 rounded-xl flex items-center justify-start gap-5"
    >
      {data.tasks.map((elem, idx)=>{
       if(elem.active){
            return <AcceptTask key={idx} data={elem}/>
       }
       if(elem.newTask){
        return <New key={idx} data={elem}/>
       }
       if(elem.completed){
        return <CompleteTask key={idx} data={elem}/>
       }
       if(elem.failed){
        return <Failedtask key={idx} data={elem}/>
       }
      })} 
    </div>
  );
};

export default Tasklist;
