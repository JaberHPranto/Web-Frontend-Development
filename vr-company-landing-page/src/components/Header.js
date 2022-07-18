import React from "react";
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import { HiMenu } from "react-icons/hi";

const Header = ({ setMobileNav }) => {
  return (
    <header className="py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">
            <img src={Logo} alt="logo" className="h-[30px]" />
          </a>
          {/* Web nev */}
          <Nav />
          {/* mobile nav */}
          <HiMenu
            onClick={() => setMobileNav(true)}
            className="lg:hidden text-3xl text-white cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
