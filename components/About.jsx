import React from "react";
import Image from "next/image";
import aboutLogo from "../public/assets/about.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // Front-End Javascript Developer
          </p>
          <p className="py-2 text-gray-600">
            I have always enjoyed technology and working with computers. In 2020
            I built my own computer and in 2021 I started learning some basic
            HTML & CSS because I thought it would be fun to make websites and
            potentially help me start my own business one day. I quickly became
            hooked, (React pun intended) and my passion for programming was
            born.
          </p>
          <p className="py-2 text-gray-600">
            As I learned, my curiousity about programming increased, so I
            started learning Javascript in order to make websites interactive.
            Wanting to improve my skills, I started learning popular Javascript
            libraries like React JS and Next JS. Currently, I am contributing to
            open source projects on Github, practicing algorithms to help solve
            problems while coding, and building responsive projects with React
            JS, Next JS, Node & Express.
          </p>
          <Link href="/#projects" scroll={false}>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={aboutLogo} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
