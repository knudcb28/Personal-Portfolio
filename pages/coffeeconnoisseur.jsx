import React from "react";
import Image from "next/image";
import monstersrolodexLogo from "../public/assets/projects/monstersrolodex.png";
import { RiRadioButtonFill } from "react-icons/ri";
import coffeeLogo from "../public/assets/projects/coffeeconnoisseur.png";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const coffeeconnoisseur = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative overflow:hidden">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={coffeeLogo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
          <h2 className="py-2">Coffee Connoisseur</h2>
          <h3>Next JS | SCSS | Airtable</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Project Overview</h2>
          <p className="mt-4">
            I wanted to create a project that would allow me to search for local
            coffee shops whenever I traveled to a new location. This project was
            a great learning experience for working with the foursquare API,
            using fetch requests, manipulating arrays and objects in order to
            use the information I wanted to display to users, and
            debugging/learning dynamic routing in Next JS. I also gained
            additional practice with React hooks like useState().
          </p>
          <p className="mt-4">
            This app was built using Next JS. Users are able to click a "Search
            Near Me" button and the app will then display a list of coffeeshops
            near the user, using the foursquare API. The user can then click on
            individual stores they like to view more inforamtion, like and share
            the coffee shop with friends. The cofee stores generated with the
            foursquare API are stored in Airtable so that the data persists if
            the user wishes to share the link with someone else.
          </p>
          <div className="mt-4">
            <Link href="https://coffee-connoisseur-3x2s.vercel.app/">
              <button className="px-8 py-2 mt-5 mr-6">Demo</button>
            </Link>
            <Link href="https://github.com/knudcb28/Coffee-Connoisseur">
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
                AirTable
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                FourSquare API
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

export default coffeeconnoisseur;
