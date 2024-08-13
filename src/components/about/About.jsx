import React from "react";
import Work from "../../assets/work2.jpg";
import { delay, motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center">
        About <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl " src={Work} alt="work done" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I am a graduate of Computer Science and I have a strong background
              of Information Technology. I'm a frontend developer and software
              tester with a passion for creating intuitive and visually
              appealing user interfaces. My expertise lies in crafting
              responsive, efficient, and user-friendly web applications. As a
              software tester, I ensure that every application I work on meets
              high standards of quality and performance through meticulous
              testing and attention to detail. I’m dedicated to delivering
              seamless and robust solution that enhance user experiences{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
