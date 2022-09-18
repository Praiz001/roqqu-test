import React from "react";

const PriceCollage = ({ data, images }) => {
  return (
    <div className="flex bg-[#0D152E] w-full rounded-[0.5rem]">
      <div className="flex space-x-[0.53rem] py-[1.43rem] items-center px-[1.22rem] w-full max-w-[11.59rem] border-r border-solid border-[#91A0CE27] ">
        <img src={images.bitcoin} alt="" width="33px" height="33px" />
        <div className="">
          <p className="text-[1rem] leading-[1.38rem] text-[#FFFFFFE8] font-heavy ">
            {data.currency}
          </p>
          <p className="text-[0.75rem] leading-[1rem] text-[#E4E4FA91] font-medium ">
            {data.crypto}
          </p>
        </div>
      </div>
      <div className="flex w-full">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="py-[1.43rem] text-right px-[1.22rem] w-full border-r border-solid border-[#91A0CE27] "
          >
            <p className="text-[0.75rem] leading-[1rem] text-[#E4E4FA91] font-medium ">
              {item.log}
            </p>
            <p className="text-[1rem] leading-[1.38rem] text-[#FFFFFFE8] font-heavy ">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCollage;
