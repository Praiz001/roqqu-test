import React from "react";

const WalletBalCard = ({ data, images }) => {
  return (
    <div className="bg-[#04091C] px-[1.5rem] py-[1.94rem] min-h-[17.9rem] text-white  ">
      <p className="mt-[0.19rem] text-[0.75rem] leading-[1.06rem] font-medium ">
        {data.balance}{" "}
      </p>
      <div className="text-center mt-[1.69rem] flex flex-col items-center">
        <p className="bg-[#D17300] w-[3.6rem] h-[1.89rem] rounded-[1.125rem] flex items-center justify-center px-[0.94rem] py-[0.38rem] text-[0.86rem] leading-[1.19rem] ">
          {data.currency}
        </p>
        <p className="mt-[0.88rem] text-[1.88rem] leading-[2.56rem] font-[heavy] ">
          {data.value}
        </p>
        <p className="mt-[0.88rem] text-[#1AC9A0] text-[0.94rem] leading-[1.25rem] font-medium   ">
          {data.price}
        </p>
        <button className="mt-[0.88rem] bg-[#0165FF] rounded-[0.5rem] text-[1rem] leading-[1.34rem] px-[1.77rem] py-[0.69rem]   ">
          {data.action}
        </button>
      </div>
    </div>
  );
};

export default WalletBalCard;
