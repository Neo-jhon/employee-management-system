import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
    <div className='h-full flex-shrink-0 w-[250px] bg-yellow-600 p-5 rounded-xl'>
    <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 classNa>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold '>{data.taskTitle}</h2>
    <p className='text-lg mt-5'>{data.taskDescription}</p>
    <div className='flex justify-between mt-5'>
        <button className='bg-green-700 p-1  rounded ml-2 text-sm cursor-pointer'>Mark as completed</button>
        <button className='bg-red-700 rounded ml-2 py-1 px-1 text-sm cursor-pointer'>Marked as failed</button>
    </div>
    
</div>
  )
}

export default AcceptTask 