import React from "react";
import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* title */}
        <h2 className="text-3xl font-bold mb-6">Mixed Reality Headsets</h2>
        {/* grid */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {/* item-1 */}
          <div className="relative">
            <img src={Headset1} alt="headset-1" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quibusdam omnis aspernatur obcaecati beatae odio!
              </p>
            </div>
          </div>
          {/* item-2 */}
          <div className="relative">
            <img src={Headset2} alt="headset-2" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">IoT</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* item-3 */}
          <div className="relative">
            <img src={Headset3} alt="headset-3" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">HoloLens</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                eum perspiciatis unde harum voluptates adipisci praesentium
                voluptas vel nam enim.
              </p>
            </div>
          </div>
          {/* item-4 */}
          <div className="relative">
            <img src={Headset4} alt="headset-4" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">TPCCASTT</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quibusdam omnis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
