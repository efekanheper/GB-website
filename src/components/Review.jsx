import React from "react";
import { motion } from "framer-motion";
import { REVIEW } from "../constants";

const Review = () => {
  return (
    <section className="container mx-auto mb-14 mt-12" id="review">
      <div className="flex flex-col items-center text-center">
        <motion.p
          className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem] text-amber-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {REVIEW.content}
        </motion.p>
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h6
            className="text-xl font-semibold"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {REVIEW.name}
          </motion.h6>
          <motion.p
            className="text-sm text-neutral-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {REVIEW.profession}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
