import React from "react"; 
import mocks from "./mocks";

import Hero from "./Hero";
import WalletBalCard from "./WalletBalCard";
import Activities from "./Activities";
import Tabs from "./Tabs";

const Home = () => {
  return (  
    <div className="p-[1.125rem] pt-[6.8rem] md:pl-[2.88rem] md:pr-[1.25rem] w-full flex flex-col space-x-0 lg:flex-row lg:space-x-[1.94rem]  ">
      <div className="flex-[3]">
        <Hero data={mocks.heroSection} images={mocks?.images} />
        <Tabs data={mocks.tabs} images={mocks?.images} />
      </div>
      <div className="flex-1 mt-[3rem] lg:mt-0 bg-[#080F24] py-[0.88rem] px-[0.63rem] rounded-[0.3rem] min-h-full ">
        <WalletBalCard data={mocks.walletBalCard} images={mocks?.images} />
        <Activities data={mocks.activities} images={mocks?.images} />
      </div>
    </div>
  );
};

// text-white outline  mt-[1.94rem] max-w-[24.3rem]

export default Home;
