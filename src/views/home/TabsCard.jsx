import React from "react";

const TabsCard = ({ data, images }) => {
  return (
    <div className="w-full md:max-w-[17.99rem] max-w-[19.99rem] bg-[#080F24] rounded-[0.3rem] py-[1.47rem] px-[1.123rem] flex space-x-[0.77rem]  ">
      <div className="">
        <img src={data.image} alt="" />
      </div>
      <div className="w-full">
        <div className="flex justify-between text-[#FFFFFFE8] text-[1rem] leading-[1.38rem] font-[heavy]  ">
          <p>{data.currency}</p>
          <p>{data.value}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[0.88rem] leading-[1.19rem] text-[#FFFFFFE8] ">
            {data.abbr}
          </p>
          <p className="text-[#1AC9A0] text-[0.75rem] leading-[1rem]">
            {data.log}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabsCard;
