"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-20">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-6xl sm:text-7xl lg:text-8xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>{" "}
            <div>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Ankit Choubey",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "MERN Devloper",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: "", display: "inline-block" }}
                repeat={Infinity}
                className="text-5xl w-full"
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi qui
            optio fugiat doloribus eligendi iusto fuga enim,
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit mt-5 rounded-full mr-4 bg-gradient-to-r from-blue-500 to-pink-600 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit mt-5 rounded-full mr-4 bg-transparent border border-white text-white hover:bg-slate-20">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-10 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] relative">
            <Image
              src="/images/hero-section.png"
              alt="user-image"
              className="absolute transform -translate-y-1/2 top-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
