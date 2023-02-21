import React from 'react'

export default function SearchBox() {
  return (
    <form className='flex max-w-6xl mx-auto justify-between items-center px-5 '>

        <input type="text" placeholder='Search Movies'
        className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'/>
     <button type='submit' className='text-amber-500 disabled:text-gray-400'> Search </button>
    </form>
  )
}
