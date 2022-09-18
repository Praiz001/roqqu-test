import React from "react";

const OrderBook = ({ data, images }) => {
  return (
    <div className="px-[0.44rem] pb-[0.44rem] pt-[1.63rem] min-h-[32.13rem] rounded-[0.63rem] w-full lg:max-w-[21.19rem]    ">
      <p className="ml-[0.94rem] font-bold text-[#FFFFFFE8] text-[1rem] leading-[1.44rem] ">
        {data.title}
      </p>
      <div className="mt-[1.19rem] py-[1rem] bg-[#04091C] rounded-[5px] w-full max-w-[20.19rem] ">
        <table className=" w-full">
          <thead className="text-[#E4E4FA91] text-[0.75rem] leading-[1rem] font-medium ">
            <tr className="">
              {data.tablehead.map((item) => (
                <th className="pr-[1.69rem]" key={item.index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[0.75rem] leading-[1rem] font-medium ">
            {data.losstable.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="text-[#FF8686] pr-[1.69rem] py-[0.25rem]">
                  {item.price}
                </td>
                <td className="text-[#FFFFFF] pr-[1.69rem] py-[0.25rem]">
                  {item.amount}
                </td>
                <td className="text-[#FFFFFF] pr-[1.69rem] py-[0.25rem]">
                  {item.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border-y-[1px] border-solid border-[#91A0CE27] p-[0.84rem] text-center my-[1.7rem]">
          <p className="text-[#FFFFFF] text-[0.88rem] leading-[1.19rem] font-[900]">
            128299.304781 USDT
          </p>
        </div>
        <table className="overflow-x-auto">
          <tbody className="text-[0.75rem] leading-[1rem] font-medium ">
            {data.profittable.map((item, index) => (
              <tr key={index} className="text-center mt-[0.5rem]">
                <td className="text-[#13A583] pr-[1.9rem] py-[0.25rem]">
                  {item.price}
                </td>
                <td className="text-[#FFFFFF] pr-[1.69rem] py-[0.25rem]">
                  {item.amount}
                </td>
                <td className="text-[#FFFFFF] pr-[1.69rem] py-[0.25rem]">
                  {item.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderBook;
