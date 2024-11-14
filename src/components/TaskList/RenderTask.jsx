import React from 'react'

const RenderTask = () => {
  return (


    <div className='h-full w-[20vw] flex-shrink-0 bg-yellow-400 rounded-xl p-5'>
       <div className='flex justify-between items-center'>

       <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>High</h3>
       <h4 className='font-semibold'>6 Nov 2024</h4>
       </div>

       <h2 className='mt-5 text-2xl font-semibold'>Comlete Employee project</h2>
       <p className='text-sm leading-tight mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quisquam nulla nihil minima sint qui est ullam. Voluptatum, consequatur hic.</p>
      <div className='felx justify-between mt-4 flex-wrap'>
           <button className='bg-emerald-400 py-1 px-2 text-sm mr-2 rounded mb-2'>Render Task</button>
           
      </div>
   </div>
  )
}

export default RenderTask