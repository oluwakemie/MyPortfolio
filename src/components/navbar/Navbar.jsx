import React from 'react'
import logo from "../../assets/kemmylogo.png";
import { RiHomeHeartFill } from "react-icons/ri";
import { IoWomanSharp } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="" className='w-20 mx-2' />
        </div>
        <div className='m-8 flex items-center justify-center gap-8 text-2xl cursor-pointer '>
            <RiHomeHeartFill/>
            <IoWomanSharp/>
            <GrTechnology/>
            <IoMdContacts/>
        </div>
    
    </nav>
  )
}

export default Navbar;