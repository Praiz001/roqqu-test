import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideNav = ({ data, images }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen ">
      <div
        onMouseEnter={() => setOpen(!open)}
        onMouseLeave={() => setOpen(!open)}
        className={`${
          open ? "w-[15.5rem]" : "w-[5.3rem] "
        } bg-[#080F24] ease-out duration-300 absolute left-0  z-[99] min-h-full text-[#FFFFFFD8] font-semibold  pr-[1.13rem] pl-[0.94rem] py-[6.88rem] `}
      >
        <nav className="space-y-[1rem] ">
          {data.navs.map((nav, index) => (
            <NavLink
              to={nav.path}
              key={index}
              className="flex space-x-[2.3rem] px-[0.8rem] py-[0.67rem] rounded-[0.5rem] hover:bg-light-purple"
            >
              <img src={nav.icon} alt="" />
              <p
                className={`${
                  !open && "hidden"
                } text-[0.88rem] leading-[1.19rem] font-normal `}
              >
                {nav.title}
              </p>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
