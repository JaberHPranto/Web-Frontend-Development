import React from "react";

import { BsPlayCircleFill } from "react-icons/bs";

const Video = () => {
  return (
    <div className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:justify-between">
          <h3
            className="text-2xl font-semibold mb-8 lg:mb-0"
            data-aos="fade-right"
            data-aos-offset="300"
          >
            Awesome experience with virtual reality world
          </h3>
          {/* video */}
          <div
            className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"
            data-aos="fade-left"
            data-aos-offset="300"
          >
            <div className="cursor-pointer">
              <BsPlayCircleFill className="text-4xl text-white/40 hover:text-white hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
