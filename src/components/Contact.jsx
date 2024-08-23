import React from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Contact = () => {
  return (
    <section className="container mx-auto py-16" id="contact">
      <motion.h2
        className="mb-8 text-center text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail, index) => (
          <motion.p
            key={detail.key}
            className="my-20 border-b-2 border-neutral-700 pb-12 text-center text-2xl tracking-tighter lg:text-3xl text-amber-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {detail.value}
          </motion.p>
        ))}
      </div>
      <motion.div
        className="mb-8 mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center gap-8">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <motion.a
              href={link.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-100"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
