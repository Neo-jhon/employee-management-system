import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-green-700 p-5 rounded-xl'>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>{data.taskTitle}</h2>
                <p className='text-sm mt-5'>{data.taskDescription}</p>
                <div>
                    <button>Failed</button>
                </div>
        </div>

  )
}

export default FailedTask