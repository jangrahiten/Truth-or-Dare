import React from 'react'

const Button = ({name, onClick}) => {
  return (
    <div className='flex min-w-40 sm:min-w-52 items-center justify-center rounded-full cursor-pointer animate-background-shine border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-6 py-2 sm:text-5xl font-bold text-gray-300 leading-relaxed'
    onClick={onClick}
    >
      {name}
    </div>
  )
}

export default Button
