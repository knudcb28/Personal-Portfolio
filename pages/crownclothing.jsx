import React from "react";
import Image from "next/image";
import crownclothingLogo from "../public/assets/projects/crwnclothing.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const crownclothing = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative overflow:hidden">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={crownclothingLogo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Crown Clothing</h2>
          <h3>React JS | SCSS | Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Project Overview</h2>
          <p className="mt-4">
            I enjoy shopping so I wanted to see if I could recreate the
            functionality and experience of popular e-commerce sites. The build
            of this site provided me with many learning opportunities, such as
            how to use React hooks like useState and useEffect, along with
            routing. I utilized styled components in this app in order to to
            avoid the repetition of using css class names. It was also a great
            opportunity practice working with JSON data and manipulating arrays
            in objects using methods like .map() to map through components and
            display relevant information to the user.
          </p>
          <p className="mt-4">
            This app was built using React JS and Google Firebase. This
            app acts as a fully-functional e-commerce site complete with Google
            Authentication, and dynamic routing. Users can view various
            categories of clothing items, add items to their cart,
            update their cart and checkout.
          </p>
          <div className="mt-2">
            <Link href="https://boisterous-frangipane-b69b15.netlify.app/">
              <button className="px-8 py-2 mt-4 mr-6">Demo</button>
            </Link>
            <Link href="https://github.com/knudcb28/Crown-Clothing">
              <button className="px-8 py-2 mt-4">Code</button>
            </Link>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Google Authentication
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                SCSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <div className="flex">
            <p className="underline cursor-pointer">
              {" "}
              <AiOutlineArrowLeft size={20} className="mt-[2px]" />
            </p>
            <p className="ml-2 underline">Back</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default crownclothing;
