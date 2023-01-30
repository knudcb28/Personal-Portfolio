import React from "react";
import Image from "next/image";
import faceappLogo from "../public/assets/projects/faceapp.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const facerecognition = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative overflow:hidden">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={faceappLogo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Face Recognition App</h2>
          <h3>React JS / SCSS / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Project Overview</h2>
          <p className="mt-4">
            I wanted to create a project to test my ability use REST API's like
            Clarifai. This project was also one of my first React apps, and
            included many learning opportunites, including how to debug code,
            integrate with an older, outdated API, refactor code to make it more
            readable and object destructuring in ES6.
          </p>
          <p className="mt-4">
            This app was built using React JS and Google Firebase. Users are
            able to sign in or register, then upload any image URL to the app.
            If there is a human face present, the Clarifai API will be able to
            detect the face and draw a border around the it. This app also has a
            built in user ranking functionality depending on how many times the
            user uses the app. User authentication is provided so you can
            register and signin to your account with your email address and
            password. This is made possible with the Clarifai API.
          </p>
          <div className="mt-4">
            <Link href="https://this-face-detection44559-984.herokuapp.com/">
              <button className="px-8 py-2 mt-5 mr-6">Demo</button>
            </Link>
            <Link href="https://github.com/knudcb28/Face-Recognition-Front-End">
              <button className="px-8 py-2 mt-5">Code</button>
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
                Clarifai API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                SCSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects" scroll={false}>
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

export default facerecognition;
