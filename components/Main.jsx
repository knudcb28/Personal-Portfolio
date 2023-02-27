import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="upppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Chris</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specializing in providing an
            exceptional client experience. Currently, I'm focused on building
            responsive front-end web applications using React.js, Next.js,
            Tailwind CSS and GraphQL, while learning back-end technologies like
            Node and Express.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/christopher-knudsvig-55510bb4/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300, active:scale-95 transition duration-150">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/knudcb28">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300, active:scale-95 transition duration-150">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:knudcb28.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300, active:scale-95 transition duration-150">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://docs.google.com/document/d/15X1ZJg1sQtjwTDF8BCfrHWnjyDWRZ6Gc/edit?usp=sharing&ouid=106349336800798633362&rtpof=true&sd=true">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300, active:scale-95 transition duration-150">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
