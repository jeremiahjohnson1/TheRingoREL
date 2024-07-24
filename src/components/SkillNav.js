import React from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";



const SkillNav = () => {
  return (
    
    <ul className="bg-amber-200 lg:flex space-x-6 font-body font-bold text-sm text-zinc-600 ">
      {navigation.map((item, index) => {
        return (
          <li key={index}>
            <Link
              to={item.href}
              smooth={true}
              offset={-120}
              activeClass="active"
              spy={true}
            >
            </Link>
          </li>
        );
      })}
    </ul>
 
  )
}

export default SkillNav;
