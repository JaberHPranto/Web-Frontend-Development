import React from "react";
import Img1 from "../assets/img/exp-img1.png";
import Img2 from "../assets/img/exp-img2.png";

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-20 min-h-[540px] md:min-h-[400px]">
          {/* images */}
          <div className="flex flex-1 space-x-6 items-center lg:space-x-12 mx-auto">
            <div className="self-start">
              <img src={Img1} alt="" />
            </div>
            <div className="self-end">
              <img src={Img2} alt="" />
            </div>
          </div>
          {/*  Text*/}
          <div className="flex flex-col flex-1 items-start justify-center mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold mb-6">
              New Experience In Playing Games
            </h2>
            <p className="font-secondary mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quod totam deleniti veniam beatae consectetur reiciendis, eius
              itaque quos. Labore.
            </p>
            <button className="btn">Get It Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
