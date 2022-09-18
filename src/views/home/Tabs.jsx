import React, { useState } from "react";
import TabsCard from "./TabsCard";
import mocks from "./mocks";
import { VscChevronDown } from "react-icons/vsc";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="">
      <div className="flex text-white mt-[1.7rem] justify-between border-b border-solid border-[#91A0CED8] ">
        <div className="tabsNav flex flex-1 text-[#91A0CED8] text-[0.88rem] leading-[1.19rem] font-medium  ">
          <button
            onClick={() => toggleTab(1)}
            className={`${
              toggleState === 1 ? "active-tabs" : ""
            } p-[1.16rem] hover:text-[#6E97F5] hover:font-bold  `}
          >
            Core Assets
          </button>
          <button
            onClick={() => toggleTab(2)}
            className={`${
              toggleState === 2 ? "active-tabs" : ""
            } p-[1.16rem] hover:text-[#6E97F5] hover:font-bold  `}
          >
            Top Gainers
          </button>
          <button
            onClick={() => toggleTab(3)}
            className={`${
              toggleState === 3 ? "active-tabs" : ""
            } p-[1.16rem] hover:text-[#6E97F5] hover:font-bold `}
          >
            Top Losers
          </button>
          <button
            onClick={() => toggleTab(4)}
            className={`${
              toggleState === 4 ? "active-tabs" : ""
            } p-[1.16rem] hover:text-[#6E97F5] hover:font-bold `}
          >
            New
          </button>
        </div>
        <div className="hidden md:block ">
          <div className="flex items-center p-[1.16rem]">
            <p className=" text-[#FFFFFFE8] mr-[9px] text-[0.88rem] leading-[1.19rem] font-medium ">
              Market Cap
            </p>
            <VscChevronDown className="text-[#EBEBEB]" />
          </div>
        </div>
      </div>
      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <div className="gap-[1.63rem] flex flex-wrap mt-[2.44rem]">
          <TabsCard data={mocks.btcCard} />
          <TabsCard data={mocks.usdtCard} />
          <TabsCard data={mocks.ethCard} />
          <TabsCard data={mocks.bnbCard} />
        </div>
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <div className="gap-[1.63rem] flex flex-wrap mt-[2.44rem]">
          <p className="text-white">TOP GAINERS</p>
        </div>
      </div>
      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <div className="gap-[1.63rem] flex flex-wrap mt-[2.44rem]">
          <p className="text-white">TOP LOSERS</p>
        </div>
      </div>
      <div
        className={toggleState === 4 ? "content  active-content" : "content"}
      >
        <div className="gap-[1.63rem] flex flex-wrap mt-[2.44rem]">
          <p className="text-white">NEW</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
