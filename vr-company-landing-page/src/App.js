import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Experience from "./components/Experience";
import Video from "./components/Video";
import Headsets from "./components/Headsets";
import Testimonial from "./components/Testimonial";
import Explore from "./components/Explore";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [mobileNav, setMobileNav] = useState(false);
  // aos initialization

  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 200,
    });
  }, []);

  return (
    <div className="relative overflow-hidden before:bg-circle before:w-[600px] before:h-[200px] before:absolute before:bg-no-repeat before:-top-16 before:left-[600px] before:hidden before:lg:flex">
      <Header setMobileNav={setMobileNav} />
      <Banner />
      {/* mobile nav */}
      <div
        className={`${
          mobileNav ? "right-0" : "-right-full"
        }  fixed top-0 bottom-0 w-48 transition-all `}
      >
        <NavMobile setMobileNav={setMobileNav} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
    </div>
  );
};

export default App;
