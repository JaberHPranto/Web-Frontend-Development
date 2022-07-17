import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
        {/* logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center flex-grow h-10  bg-yellow-400 hover:bg-yellow-500 rounded-md">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow  rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* right */}
        <div className="text-white flex items-center text-xs space-x-4 md:space-x-6 mx-2 md:mx-4">
          <div className="link">
            <p>Hello Pranto</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center ">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-semibold">
              2
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center bg-amazon_blue-light text-white space-x-3 p-2  text-sm">
        <p className="flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden md:inline">Electronics</p>
        <p className="link hidden md:inline">Food & Grocery</p>
        <p className="link hidden lg:inline">Prime</p>
        <p className="link hidden lg:inline">Buy Again</p>
        <p className="link hidden lg:inline">Shopper Toolkit</p>
        <p className="link hidden lg:inline">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
