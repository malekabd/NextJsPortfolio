"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


export default function HeroSection() {
  const handleDownloadCV = () => {

    const githubLink =
      "https://github.com/malekabd/cv/blob/main/CV%20.pdf";

    window.open(githubLink, "_blank");
  };

  return (
    <section className="mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-blue-600 to-slate-600">
              Hello,I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                " Eng.Malek",
                1000,
                "Mechatronices ",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Results-driven Mechatronics Engineering graduate with a focus on web
            development, specializing in React. Adept at applying engineering
            principles to create dynamic and efficient web solutions. Eager to
            contribute strong analytical and problemsolving skills to a
            React-based development role, combining a robust engineering
            background with a passion for innovative coding practices.
          </p>
          {/*  <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-blue-600 to-slate-600 hover:bg-slate-200 text-white">
            Hire me
          </button> */}
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900 hover:bg-slate-800 text-white  mt-3">
            <span className="block  rounded-full " onClick={handleDownloadCV}>
              Download CV
            </span>
          </button>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero Image"
              className="absolute rounded-full bg-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
