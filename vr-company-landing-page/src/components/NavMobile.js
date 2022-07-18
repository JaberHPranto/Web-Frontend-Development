/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoClose } from "react-icons/io5";

const NavMobile = ({ setMobileNav }) => {
  return (
    <nav className="lg:hidden bg-[#251f3f] w-full h-full">
      <IoClose
        className="text-3xl absolute left-4 top-6 cursor-pointer"
        onClick={() => setMobileNav(false)}
      />
      <ul className="flex flex-col items-center justify-center space-y-8 h-full font-secondary">
        <li className="text-3xl">
          <a href="#">Home</a>
        </li>
        <li className="text-3xl">
          <a href="#">Company</a>
        </li>
        <li className="text-3xl">
          <a href="#">Features</a>
        </li>
        <li className="btn">
          <a href="#">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
