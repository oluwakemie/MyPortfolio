import React from "react";
import { CONTACT } from "../../constants";
import { motion } from "framer-motion";
import "../../index.css";
const Contact = () => {
  return (
    <div className=" w-full h-screen pb-20 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h1>
      <div className="mb-8 flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2">
          {" "}
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            <span className="text-neutral-400">Home Address:</span>
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            <span className="text-neutral-400">Phone number:</span>
            {CONTACT.phoneNo}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            <span className="text-neutral-400">Email Address: </span>
            {CONTACT.email}
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col  ">
          <label className="relative mb-5">
            {" "}
            <input
              type="text"
              className="w-full bg-black border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-purple-500 focus:text-white  py-2 transition duration-200 peer focu:border-indigo-600 bg-inherit px-2 "
            />{" "}
            <span className="text-white text-opacity-80 absolute  left-0 top-2 mx-6 px-2  duration-200 tracking-wide peer-focus:text-white pointer-events-none *:duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-neutral-900 ml-2">
              Full Name
            </span>
          </label>
          <label className="relative mb-5">
            {" "}
            <input
              type="email"
              className="w-full bg-black border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-purple-500 focus:text-white  py-2 transition duration-200 peer  bg-inherit px-2"
            />{" "}
            <span className="text-white text-opacity-80 absolute  left-0 top-2 mx-6 px-2  duration-200 tracking-wide peer-focus:text-white pointer-events-none *:duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-neutral-900 ml-2">
              Enter your email address
            </span>
          </label>
          <textarea name="message" id="message" placeholder="Enter your message" className="rounded px-2 py-2 bg-black border-2 focus:border-purple-500 focus:text-white  border-white border-opacity-50 outline-none " rows={5}></textarea>
          <button className="px-3 py-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 border-2 outline-none w-[100px] rounded mt-3 text-black " type="submit">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
