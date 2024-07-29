import React from "react";
import { team } from "../data";

const Team = () => {
  return (
    <section id="team" className="section">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary text-zinc-700 font-extrabold mb-5" >
            Our Attorneys
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px] ">
        Meet our team of dedicated and experienced legal professionals, committed to providing exceptional service and personalized solutions to meet all your legal needs. Each attorney brings a wealth of knowledge and a passion for justice, ensuring that you receive the highest quality representation and support. Discover the expertise and dedication that sets our attorneys apart.
        </p>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-[30px]">
        {team.map ((item, index) => {
          const {image, name, position, description}= item;
          return <div className="text-center lg:text-left mb-12" key={index}>
            <img className="mx-auto lg:w-90 lg:h-90 lg:mx-0 mb-6" src={image}/>
            <h4 className="text-2xl mb-2 font-primary font-bold text-zinc-600">{name}</h4>
            <p className="text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.4]">{position}</p>
            <p className="max-w-[332px] lg:max-w-[332px] mx-auto lg:mx-0 text-zinc-600">{description}</p>
          </div>
        })}
        </div>
      </div>
    </section>
  );
};

export default Team;
