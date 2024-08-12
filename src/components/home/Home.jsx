import React from "react";
import Profile from "../../assets/abour.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Home = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      {" "}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Oluwakemi Esther
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Frontend Developer & QA Tester
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-3 font-light tracking-tighter"
            >
              A dedicated frontend developer and a skilled QA Tester with 2
              years of hands-on experience in building responsive, user-friendly
              and scalable web applications. Proficient in HTML, CSS,
              JavaScript, and frameworks like React.js and Vue.js. and
              Proficient in manual and automated testing techniques, Familiar
              with tools like Selenium,JIRA and TestRail.
               Passionate about
              continuous learning and staying up-to-date with the latest web
              development trends and technologies.
            </motion.p>
          </div>
          <div className="m-8 flex items-center justify-start gap-8 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={Profile}
              alt="Kemmie"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
