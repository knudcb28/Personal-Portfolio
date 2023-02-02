import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import navLogo from "../public/assets/navLogo.svg";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/crownclothing" ||
      router.asPath === "/facerecognition" ||
      router.asPath === "/coffeeconnoisseur" ||
      router.asPath === "/airbnb"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow ? "fixed w-full h-20 shadow-xl z-50" : "fixed w-full h-20 z-50"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#main" scroll={false}>
          <Image src={navLogo} alt="navlogo" height="auto" className="logo"/>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/#main" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:shadow-xl">Home</li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:shadow-xl">About</li>
            </Link>
            <Link href="/#skills" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:shadow-xl">Skills</li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:shadow-xl">
                Projects
              </li>
            </Link>
            <Link href="/#contact" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:shadow-xl">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link onClick={handleNav} href="/#main" scroll={false}>
                <Image src={navLogo} width="87" height="35" alt="navLogo" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link onClick={handleNav} href="/#main" scroll={false}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link onClick={handleNav} href="/#about" scroll={false}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link onClick={handleNav} href="/#skills" scroll={false}>
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link onClick={handleNav} href="/#projects" scroll={false}>
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link onClick={handleNav} href="/#contacts" scroll={false}>
                <li className="py-4 text-sm">Contacts</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href="https://www.linkedin.com/in/christopher-knudsvig-55510bb4/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://github.com/knudcb28">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="mailto:knudcb28.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="https://drive.google.com/file/d/1ALOP7wTR2PcJowK4XpBz0adt3y6cuqn1/view?usp=sharing">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
