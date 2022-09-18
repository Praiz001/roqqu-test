import React from "react";
import { TbChartCandle } from "react-icons/tb";
import { VscLaw } from "react-icons/vsc";
import { GiChart } from "react-icons/gi";
import { TbArrowLeftRight } from "react-icons/tb";
import { BiCamera } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsArrowsFullscreen } from "react-icons/bs";

import Rechart from "./Rechart";

const Charts = ({ data, images }) => {
  return (
    <div className="w-full py-[1rem] lg:max-w-[57.69rem] min-h-[30.4rem] bg-[#0D152E] rounded-[0.63rem]">
      <div className="px-[1.8rem] py-[1.04rem] rounded-[0.63rem] ">
        <div className="flex items-center justify-between ">
          <p className="text-[#FFFFFFE8] text-[1rem] leading-[1.44rem] font-bold  ">
            {data.title}
          </p>
          <span className="flex space-x-[1.38rem] text-[0.88rem] leading-[1.19rem] text-[#FFFFFFE8] ">
            <button className="hover:bg-[rgb(5,25,85)] focus:bg-[rgb(5,25,85)] py-[0.44rem] px-[1rem] rounded-[0.31rem] ">
              {data.price}
            </button>
            <button className="hover:bg-[rgb(5,25,85)] focus:bg-[rgb(5,25,85)] py-[0.44rem] px-[1rem] rounded-[0.31rem] ">
              {data.depth}
            </button>
          </span>
        </div>
        <div className="flex justify-between mt-[1rem]">
          <div className="flex text-[#E4E4FA] text-[0.75rem] leading-[1rem] space-x-[0.3rem] ">
            <button className="px-[1.56rem] py-[0.8rem] bg-[#21293E41] rounded-[0.3rem] text-[#E4E4FA] ">
              4h
            </button>
            <button className="px-[1.56rem] py-[0.8rem] bg-[#21293E41] rounded-[0.3rem] text-[#E4E4FA91]">
              <TbChartCandle />
            </button>
            <button className="px-[1.56rem] py-[0.8rem] bg-[#21293E41] rounded-[0.3rem] text-[#E4E4FA91]">
              <VscLaw />{" "}
            </button>
            <button className="px-[1.56rem] py-[0.8rem] bg-[#21293E41] rounded-[0.3rem] text-[#E4E4FA91]">
              <GiChart />
            </button>
            <button className="px-[1.56rem] py-[0.8rem] bg-[#21293E41] rounded-[0.3rem] text-[#E4E4FA91]">
              <TbArrowLeftRight />
            </button>
          </div>
          <div className="flex text-[#E4E4FA] text-[0.75rem] leading-[1rem] space-x-[0.3rem] ">
            <button className="px-[1.56rem] py-[0.8rem] bg-[#21293E41] rounded-[0.3rem] text-[#E4E4FA] ">
              Save
            </button>
            <button className="px-[1.56rem] py-[0.8rem] bg-[#21293E41] rounded-[0.3rem] text-[#E4E4FA91] ">
              <BiCamera />
            </button>
            <button className="px-[1.56rem] py-[0.8rem] bg-[#21293E41] rounded-[0.3rem] text-[#E4E4FA91] ">
              <AiOutlineSetting />
            </button>
            <button className="px-[1.56rem] py-[0.8rem] bg-[#21293E41] rounded-[0.3rem] text-[#E4E4FA91]">
              <BsArrowsFullscreen />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[1.02rem] text-white bg-[#04091C] mx-auto w-[95%] min-h-[20.95rem] ">
        <p className="text-[#FFFFFF] text-[1.123rem] leading-[1.6rem] ">
          BTC / NGN: 26,792,926.87
        </p>
        <Rechart />
      </div>
    </div>
  );
};

export default Charts;