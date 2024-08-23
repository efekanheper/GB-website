import React from "react";
import { motion } from "framer-motion";
import { FRAGRANCES } from "../constants";
import FCard from "./FCard";

const Fragrances = () => {
  return (
    <section className="container mx-auto py-16" id="fragrances">
      <motion.h2
        className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Fragrances
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {FRAGRANCES.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <FCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Fragrances;
