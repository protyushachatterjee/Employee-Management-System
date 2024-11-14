import React from 'react'

const New = ({data}) => {
  return (

    <div className='h-full w-[20vw] flex-shrink-0 bg-green-400 rounded-xl p-5'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>{data.taskCategory}</h3>
    <h4 className='font-semibold'>{data.taskDate}</h4>
  </div>

  <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
  <p className='text-sm leading-tight mt-2'>{data.taskDescrip}</p>
  <div className='flex justify-between mt-4'>
    <button className='bg-red-400 py-1 px-2 text-sm rounded'>Accept Task</button>
  </div>
</div>
  )
}

export default New