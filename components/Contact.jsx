import React from "react";
import Image from "next/image";
import contactLogo from "../public/assets/contact.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { send } from "emailjs-com";
import { useState } from "react";

const initialState = {
  from_name: "",
  to_name: "",
  message: "",
  reply_to: "",
  subject: "",
  phonenumber: "",
};

const Contact = () => {
  const [formResponseMessage, setFormResponseMessage] = useState(undefined);

  const [toSend, setToSend] = useState(initialState);
  const [loading, setLoading] = useState("Send Message");

  const onSubmit = (e) => {
    setFormResponseMessage(undefined);
    setLoading(
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    );
    e.preventDefault();
    send("service_qhzxckn", "template_3qgk2nm", toSend, "qZtETgJdHLsdWVDp9")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormResponseMessage("Your message has been successfully sent!");
        setToSend(initialState);
        setLoading("Send Message");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setFormResponseMessage("Message was unable to send...");
        setLoading("Send Message");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="py-[9rem]">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactLogo}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 pt-8">Chris Knudsvig</h2>
                <p className="">Front-End Javascript Developer</p>
                <p className="py-4 pt-8">
                  I am available for full-time or part-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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

          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form id="emailForm" onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      value={toSend.from_name}
                      onChange={handleChange}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      required
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="phonenumber"
                      value={toSend.phonenumber}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="reply_to"
                    value={toSend.reply_to}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    name="subject"
                    value={toSend.subject}
                    onChange={handleChange}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    required
                  ></textarea>
                </div>
                {loading === "..." ? (
                  <button
                    type="text"
                    className="w-full mt-8 p-4 bg-[#5651e5] cursor-pointer ease-in duration-300, active:scale-95 transition duration-150"
                  >
                    {loading}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full mt-8 p-4 bg-[#5651e5] cursor-pointer ease-in duration-300, active:scale-95 transition duration-150"
                  >
                    {loading}
                  </button>
                )}
                <div className="flex justify-center">
                  {formResponseMessage ===
                  "Your message has been successfully sent!" ? (
                    <p className="text-[#32D190] text-lg font-bold uppercase mt-4 transition-opacity ease-in duration-[3000ms] opacity-0 ">
                      {formResponseMessage}
                    </p>
                  ) : (
                    <p className="text-red-400 text-lg font-bold uppercase mt-4">
                      {formResponseMessage}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="#main" scroll={false}>
            <div className="rounded-full shadow-lg shadow-gray-400 mt-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
