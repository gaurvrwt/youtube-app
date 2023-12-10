import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isSidebarVisible = useSelector(store=>store.app.isMenuOpen);
  if(!isSidebarVisible){
    return null
  }
  return (
    <div className='shadow-lg w-44 font p-3'>
      <div className="one p-2"> 
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      </div>
      <div className="two p-2"> 
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Your Movies</li>
      </ul>
      </div>
      <div className="three p-2">
        <ul>
          Subscriptions
        </ul>
         </div>
    </div>
  )
}

export default Sidebar