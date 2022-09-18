import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const DesktopNav = ({ data, images }) => {
  return (
    <div className="fixed z-20 w-full items-center pt-[1.56rem] pb-[1.44rem] pr-[4.31rem] pl-[2.69rem] flex justify-between bg-[#080F24]  ">
      <Link to="/">
        <img src={images.brand} alt="brandlogo" width={100} height={73} />
      </Link>
      <div className="flex space-x-[8.47rem] ">
        <div className="flex space-x-[3.6rem] text-[#FFFFFFD8] text-[0.88rem] leading-[1.19rem]  ">
          <button className="hover:text-[#91A0CED8]">{data.action1}</button>
          <button className="hover:text-[#91A0CED8]">{data.action2}</button>
          <button className="hover:text-[#91A0CED8]">{data.action3}</button>
        </div>
        <div className="flex space-x-[1.75rem] items-center">
          <img src={images.notifications} alt="" />
          <CgProfile className="text-[#91A0CED8] w-[1.19rem] h-[1.5rem] " />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
