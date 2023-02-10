import React from "react";
import Image from "next/image";
import faceappLogo from "../public/assets/projects/faceapp.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import metaLogo from "../public/assets/projects/metamessenger.png"

const metamessenger = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative overflow:hidden">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1 pt-[80px]"
          layout="fill"
          objectFit="cover"
          src={metaLogo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Meta Messenger</h2>
          <h3>Next JS | TypeScript | Upstash</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Project Overview</h2>
          <p className="mt-4">
            I wanted to create a project which utilized some of Next JS 13's exciting new features like React Server Components and loading conventions. This app was one of my harder to debug apps, because although the database portion was simplified using Upstash, I needed to work with the facebook API and Next Auth in order to ensure both the home page and messages could load properly. I learned a lot by reading the Next Auth and Facebook API documentation throughout building this app, and much of it did not work as intended at first, but I am proud it came together in the end. I also had to debug code that would work initially during development, but broke upon production due to incorrect enviornment variable names. I was also able to continue practicing my useState React hooks and event handlers. This was also one of my first projects using Typescript, so there was a lot of debugging trying to figure out which types worked. 
          </p>
          <p className="mt-4">
            This app was built using Next Js and Upstash. Users are
            able to sign in using the facebook authentication, and then post messeges which are pushed in real time to the app, thanks to Pusher and Upstash. If a component needed to use a react hook, like useEffect or useState, then i simply used the Next JS feature "use client" at the top so that individual component would be client side rendered instead of the whole app, improving performance and the user experience.
          </p>
          <div className="mt-4">
            <Link href="https://messenger-app-orcin.vercel.app/auth/signin?callbackUrl=https%3A%2F%2Fmessenger-app-orcin.vercel.app%2F">
              <button className="px-8 py-2 mt-5 mr-6">Demo</button>
            </Link>
            <Link href="https://github.com/knudcb28/Messenger-App">
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
                Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next Auth/Facebook Auth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
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

export default metamessenger;
