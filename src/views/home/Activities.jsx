import React from "react";

function Activities({ data, images }) {
  return (
    <div className="mt-[3rem] ">
      <p className="text-[1.123rem] leading-[1.63rem] font-bold text-[#FFFFFFE8]">
        {data.title}
      </p>
      <div className="space-y-[0.88rem] mt-[1.25rem] ">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#04091C] rounded-[0.3rem] px-[1.06rem] py-[1.123rem] flex space-x-[1.19rem]"
          >
            <div className="rounded-full h-[2.88rem] w-[2.88rem] text-white bg-[#4848483C] flex justify-center items-center">
              <p>{item.icon}</p>
            </div>
            <div className="w-[80%]">
              <div className="flex justify-between ">
                <p className="text-[#FFFFFFE8] text-[0.88rem] leading-[1.19rem] font-[heavy] ">
                  {item.title}
                </p>
                <p className="text-[#91A0CED8] text-[0.75rem] leading-[1rem] ">
                  {item.date}
                </p>
              </div>
              <p className="text-[#13A583] text-[0.88rem] leading-[1.19rem] font-[heavy] mt-[0.3rem] ">
                {item.status}
              </p>
              <p className="text-[#BFC6DECB] text-[0.88rem] leading-[1.19rem] mt-[0.3rem] ">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
