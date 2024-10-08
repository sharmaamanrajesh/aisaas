import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchDashboard = () => {
  return (
    <div className='mx-5 py-2'>
        <div className='flex flex-col md:flex-row gap-2 mt-5 py-6 px-4 bg-white rounded'>
            <div className='flex gap-2 items-center p-2 border rounded-full bg-white w-full md:w-[20%]'>
                <SearchIcon/>
                <input type="text" placeholder='Search...' className='bg-transparent outline-none text-black'/>
            </div>
        </div>
    </div>
  )
}

export default SearchDashboard

// 40:33