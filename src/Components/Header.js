import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'

const Header = () => {

    const dispatch = useDispatch()

 const toggleSidebar = ()=>{
    console.log('inside func')
   dispatch(toggleMenu())
 }

  return (
    <div className='grid grid-flow-col p-2 h-16 shadow-lg mt-2'>
        <div className="flex align-middle col-span-2">
            <img className='w-10 h-8 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="Hamburger" onClick={toggleSidebar} />
            <img className='w-32 h-10 pl-4 cursor-pointer ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="Youtube Icon" />
        </div>
        <div className="col-span-8 flex justify-center align-middle">
            <input className='w-80 border-2 rounded-lg' type="text" />
            <span className='py-2 px-2 border-2 rounded-lg w-12 cursor-pointer'>🔎</span>
        </div>
        <div className="flex justify-end col-span-2">
            <span>
                Profile
            </span>
        </div>
    </div>
  )
}

export default Header