import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashBoard = ({data, changeUser}) => {
  console.log(data)
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen '>
            <Header data={data} changeUser={changeUser}/>
            <TaskNumber data={data}/>
            <Tasklist data={data}/>
        </div>
    </div>
  )
}

export default EmployeeDashBoard