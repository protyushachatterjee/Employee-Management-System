import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex mt-10 screen justify-between flex-wrap'>
        <div className='px-10 py-6 rounded-xl w-[20vw] bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
        <div className='px-10 py-6 rounded-xl w-[20vw] bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-semibold'>Completed Task</h3>
        </div>
        <div className='px-10 py-6 rounded-xl w-[20vw]  bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-semibold'>Failed Task</h3>
        </div>
        <div className='px-10 py-6 rounded-xl w-[20vw] bg-yellow-400'>
            <h2 className='text-3xl font-semibold text-black'>{data.taskCount.active}</h2>
            <h3 className='text-xl text-black font-semibold'>Active Task</h3>
        </div>
        
    </div>
  )
}

export default TaskNumber