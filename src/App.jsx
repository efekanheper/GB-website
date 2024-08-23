import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Fragrances from "./components/Fragrances";
import About from "./components/About";
import Mission from "./components/Mission";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-y-hidden text-stone-100 antialiased">
      <Hero />
      <Navbar />
      <Fragrances />
      <About />
      <Mission />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
