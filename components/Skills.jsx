import React from "react";
import Image from "next/image";
import htmlLogo from "../public/assets/skills/html.png";
import cssLogo from "../public/assets/skills/css.png";
import firebaseLogo from "../public/assets/skills/firebase.png";
import githubLogo from "../public/assets/skills/github1.png";
import javascriptLogo from "../public/assets/skills/javascript.png";
import nextLogo from "../public/assets/skills/nextjs.png";
import nodeLogo from "../public/assets/skills/node.png";
import reactLogo from "../public/assets/skills/react.png";
import tailwindLogo from "../public/assets/skills/tailwind.png";
import amazonLogo from "../public/assets/skills/aws.png";
import mongoLogo from "../public/assets/skills/mongo.png";
import shopifyLogo from "../public/assets/skills/shopify.png";
import Link from "next/link";

const Skills = () => {
  return (
    <div id="skills" className="w-full pt-[9rem]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={htmlLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={cssLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={javascriptLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JS</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://beta.reactjs.org/">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={reactLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://nextjs.org/docs/getting-started">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={nextLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Next</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://docs.github.com/en">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={githubLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Github</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://nodejs.org/en/docs/">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={nodeLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Node</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://firebase.google.com/docs">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={firebaseLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://tailwindcss.com/docs/installation">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={tailwindLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.mongodb.com/docs/">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={mongoLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Mongo</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://shopify.dev/api">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={shopifyLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Shopify</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://docs.aws.amazon.com/">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={amazonLogo} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>AWS</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
