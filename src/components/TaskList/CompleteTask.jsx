import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[250px] bg-blue-700 p-5 rounded-xl'>
    <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold '>{data.taskTitle}</h2>
        <p className='text-sm mt-5'>{data.taskDescription}</p>
        <div className='mt-2'>
            <button className='  flex justify-center items-center w-full mt-12 p-2 rounded cursor-pointer bg-green-700'>Complete</button>

        </div>
</div>
  )
}

export default CompleteTask