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
      <div className="container mx-auto flex flex-col items-center justify-center pt-40 md:pt-48 lg:pt-56 pb-16 lg:pb-0">
        <div className="text-center mb-8">
          <h1 className="font-primary font-black text-6xl lg:text-8xl text-zinc-700 mb-4 lg:mb-8 leading-tight lg:leading-[90px] mt-24 md:mt-0">
            {skill.title}
          </h1>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <IdentityForm />
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
