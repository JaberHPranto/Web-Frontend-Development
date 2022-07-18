import React from "react";
import BannerImg from "../assets/img/banner-img.png";
import Users from "./Users";

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-16 pb-12 text-center relative ">
      <div className=" container mx-auto  lg:pb-0 lg:text-left">
        <div className="flex flex-col lg:flex-row">
          <div>
            {/* Text */}
            <h1 className="text-3xl mb-8 font-bold md:text-4xl lg:text-5xl lg:leading-snug">
              Let's Explore <br /> Three-Dimensional Visually
            </h1>
            <p className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              quisquam harum ea quas dolorem itaque ut temporibus quia nam
              reiciendis.
            </p>
            {/* buttons */}
            <div className="flex items-center  justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-12 lg:mx-0 lg:max-w-none lg:justify-start">
              <button className="btn">Get it now</button>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-white transition ease-out"
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          {/* Hero Image */}
          <div>
            <img src={BannerImg} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
