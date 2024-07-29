import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { skills } from "../data";
import IdentityForm from "./Verification";
import SkillHeader from "./SkillHeader";
import SkillNav from "./SkillNav"; // Import SkillNav

const SkillsPage = () => {
  const { id } = useParams();
  const skill = skills.find((skill) => skill.id === id);
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once

  if (!skill) {
    return <div>Skill not found</div>;
  }

  return (
    <section className="bg-amber-200 min-h-screen">
      <SkillHeader />
      <SkillNav /> {/* Include SkillNav here */}
      <div className="container mx-auto flex flex-col items-center justify-center pt-16 md:pt-12 lg:pt-0 pb-16 lg:pb-0">
        <div className="text-center mb-0 md:mb-4 lg:mb-2">
          <h1 className="font-primary font-black text-6xl lg:text-8xl text-zinc-700 mb-2 sm:mb-4 lg:mb-2 leading-tight lg:leading-[90px] mt-16 sm:mt-24 lg:mt-11">
            {skill.title}
          </h1>
        </div>
        <div className="w-full lg:w-1/2 px-4 mt-0">
          <IdentityForm />
        </div>
      </div>
    </section>
  );
  
};

export default SkillsPage;
