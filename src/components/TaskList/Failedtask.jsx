import React from 'react'

const Failedtask = ({data}) => {
  return (
   
    <div className='h-full w-[20vw] flex-shrink-0 bg-pink-400 rounded-xl p-5'>
       <div className='flex justify-between items-center'>

       <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>{data.category}</h3>
       <h4 className='font-semibold'>{data.date}</h4>
       </div>

       <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
       <p className='text-sm leading-tight mt-2'>{data.description}</p>
      <div className='felx justify-between mt-4 '>
           <button className='bg-yellow-400 py-1 px-2 text-sm rounded'>Failed</button>
      </div>
   </div>

  )
}

export default Failedtask