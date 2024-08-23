import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";

const About = () => {
  return (
    <section className="container mx-auto mb-16" id="about">
      <motion.h2
        className="mb-12 text-center text-3xl tracking-tighter lg:text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          className="w-full p-4 lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={about}
            className="rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        <motion.div
          className="w-full px-2 lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold tracking-tighter lg:text-6xl ">
            {ABOUT.header}
          </h2>
          <div className="mb-8 mt-3 h-2 w-36 "> </div>
          <p className="m-8 text-2xl leading-relaxed tracking-tighter  lg:max-w-xl">
            {ABOUT.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
