import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Hero = ({ data, images }) => {
  return (
    <div className="rounded-[1rem] text-white p-[2.38rem] bg-gradient-to-tr from-[#2733C4] to-[#9F19D1] ">
      <p className="text-[0.88rem] leading-[1.19rem] font-normal ">
        {data.date}
      </p>
      <div className="flex space-x-[3.88rem] mt-[2.123rem] ">
        <div className="max-w-[30.313rem]">
          <h2 className="text-[1.88rem] leading-[2.69rem] font-[700]  ">
            {data.title}
          </h2>
          <p className="my-[1rem] text-[1rem] leading-[1.75rem] max-w-[27.8rem] text-[#E8E9EBCC] font-normal   ">
            {data.desc}
          </p>
          <button className="bg-[#030303] py-[1.25rem] px-[2.28rem] text-white text-[1rem] leading-[0.85rem] flex items-center font-[900] rounded-[0.5rem]">
            <p>Learn More</p>
            <BsArrowRightShort className="ml-[2.06rem] w-[24px] h-[24.19px] " />
          </button>
        </div>
        <div className="hidden lg:block w-full max-w-[17.4rem] h-[14.1rem]  ">
          <img src={images.hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
