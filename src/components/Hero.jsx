import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2  lg:gap-10">
        <div className="fade-in">
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 slide-in-left delay-200 relative">
            Crafting Intelligent Solutions with AI & Full Stack Development
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></span>
          </h2>

          <div className="flex items-center gap-3 slide-in-left delay-300">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="assets\Navneet_CV.pdf"
              download="Navneet_CV.pdf"
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block slide-in-right delay-400">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden shadow-2xl hover:shadow-sky-400/50 transition-shadow duration-300">
            <img
              src="assets/102.png"
              width={656}
              height={800}
              alt="Navneet Gupta"
              className="w-full hover:scale-105 transition-transform duration-500"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
