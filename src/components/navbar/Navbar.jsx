import React from "react";
import logo from "../../assets/kemmylogo.png";
import { Link } from "react-router-dom";
import { RiHomeHeartFill } from "react-icons/ri";
import { IoWomanSharp } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { MdWork } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="" className="w-20 mx-2" />
      </div>
      <div className="m-8 flex items-center justify-center gap-8 text-2xl cursor-pointer">
        <Link to="/" className="hover:text-purple-500">
          <RiHomeHeartFill />
        </Link>
        <Link to="/about" className="hover:text-purple-500">
          <IoWomanSharp />{" "}
        </Link>
        <Link to="/technology" className="hover:text-purple-500">
          {" "}
          <GrTechnology />
        </Link>
        <Link to="/project" className="hover:text-purple-500">
          {" "}
          <MdWork />
        </Link>

        <Link to="/contact" className="hover:text-purple-500">
          <IoMdContacts />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
