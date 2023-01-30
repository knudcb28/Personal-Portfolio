import React from "react";
import Image from "next/image";
import particleLogo from "../public/assets/projects/particles.png";
import { RiRadioButtonFill } from "react-icons/ri";
import airbnbLogo from "../public/assets/projects/airbnb.png";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";


const airbnb = () => {
  return (
    <div className="w-full relative">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative overflow:hidden">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={airbnbLogo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
          <h2 className="py-2">AirBnb 2.0</h2>
          <h3>Next JS | MapBox</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Project Overview</h2>
          <p className="mt-4">
            I wanted to create a project using CSS Grid that was responsive and
            incorporated some React skills that I have learned along the way. How to display a dynamic loading bar to the user was something I learned when making this project. 
            This project also helped me to reinforce skills like manipulating data working with API's
            like Mapbox, reading documetation to debug problems in code such as
            how to map through React components and pass props down to React
            components to then map through.
          </p>
          <p className="mt-4">
            This app was built using Next JS and MapBox API. The user can search for a location and select a date range to book a stay for locations. The app will also display information to the user about various places they can stay, along with price information and a map with nearby locations of interest. 
          </p>
          <div className="mt-4">
            <Link href="https://airbnb-2-0-chi.vercel.app/">
              <button className="px-8 py-2 mt-5 mr-6">Demo</button>
            </Link>
            <Link href="https://github.com/knudcb28/Airbnb-2.0">
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
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MapBox API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React JS
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

export default airbnb;
