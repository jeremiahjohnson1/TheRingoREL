import React from "react";
import Header from "./Header";
import Appointment from "./Appointment";
import LawyerImage from "../assets/img/lawyer_banner.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-800
       bg-gradient-to-t
       from-amber-100 to-amber-200"
    >
      <Header />
      <div className="container mx-auto h-full lg:flex-auto pt-48 lg:pt-40">
        <div>
        <h1 className="font-primary font-black text-8xl lg:text-8x1 text-zinc-700 mb-4 lg:mt-[90px] leading-tight lg:leading-[90px]">
            Real Estate Management  <br/> <span className="text-amber-300">Our Priority.</span>
        </h1>
        <p className="max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]  text-zinc-600 font-bold">
           Welcome to The Ringo Real Estate Lawyers , where we blend professionalism, innovation, and a deep sense of community to meet all your real estate needs. 
        <p>Whether you're buying, selling, or renting, our experienced team offers personalized service, advanced tools. </p>
        <p> Explore our diverse listings, from luxury estates to cozy rentals, and let us guide you in building a future filled with lasting memories.</p>
        </p>
        
          <div className="lg:absolute mx-auto mx-w-[455px] lg:mx-0">
            <Appointment/>
          </div>
          <div className="hidden flex-1 lg:flex lg:flex-col items-end">
            <img src={LawyerImage} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default Banner;
