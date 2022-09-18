import React from "react";
import mocks from "./mocks";
import Charts from "./Charts";
import OrderBook from "./OrderBook";
import PriceCollage from "./PriceCollage";

const Exchange = () => {
  return (
    <div className="p-[1.125rem] pt-[6.8rem] md:pl-[2.88rem] md:pr-[1.25rem] w-full  ">
      <PriceCollage data={mocks.priceCollage} images={mocks?.images} />
      <div className="mt-[1.69rem] flex flex-col space-x-0 lg:flex-row lg:space-x-[0.8rem] ">
        <div className="flex-[3]">
          <Charts data={mocks.charts} images={mocks?.images} />
        </div>
        <div className="flex-1 mt-[2rem] lg:mt-0 bg-[#080F24]">
          <OrderBook data={mocks.orderBook} images={mocks?.images} />
        </div>
      </div>
    </div>
  );
};

// flex flex-col space-x-0 lg:flex-row lg:space-x-[1.94rem] w-full min-w-[57.69rem]

export default Exchange;
