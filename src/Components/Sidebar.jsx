import React from "react";
import { PiVanBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdRequestQuote } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white fixed mt-16 top-0 left-0 bottom-0 lg:w-56 sm:w-[20%] md:w-[50%] w-full md:h-full md:px-4 py-2 overflow-y-auto">
      <ul className="mt-3 text-black font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
          <Link to={"/mymoves"} className="px-3 flex items-center">
            <PiVanBold className="inline-block w-6 h-6 mr-2 mt-2 text-black" />
            MY MOVES
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
          <a href="#" className="px-3 flex items-center">
            <CgProfile className="inline-block w-6 h-6 mr-2 mt-2 text-black" />
            MY PROFILE
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
          <a href="#" className="px-3 flex items-center">
            <MdRequestQuote className="inline-block w-6 h-6 mr-2 mt-2 text-black" />
            GET QUOTE
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
          <a href="#" className="px-3 flex items-center">
            <RiLogoutCircleLine className="inline-block w-6 h-6 mr-2 mt-2 text-black" />
            LOGOUT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
