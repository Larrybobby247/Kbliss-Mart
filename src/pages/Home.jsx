import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import NewProds from "../components/NewProds";
import TopProds from "../components/TopProds";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <div className="px-8 md:px-14 lg:px-20 flex flex-col gap-20">
        <Services />
        <NewProds />
        <Categories />
        <TopProds/>
        <Testimonials/>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
