/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Layout } from "../components";
import Uparrow from "../assets/images/up.png";
import {
  HeroSection,
  FaqSection,
  SliderSection,
  RoadmapSection,
  AboutSection,
  JoinSection,
  TeamSection,
} from "../sections";
const Home = () => {
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <div>
      <a
        href="#"
        className={`" bg-primary text-white click-to-top rounded-full shadow-xl ${
          show ? "show" : null
        } "`}
      >
        <img src={Uparrow} alt="" className="w-5" />
      </a>
      <Layout>
        <HeroSection />
        <FaqSection />
        <SliderSection />
        <RoadmapSection />
        <AboutSection />
        <TeamSection />
        <JoinSection />
      </Layout>
    </div>
  );
};

export default Home;
