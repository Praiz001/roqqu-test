import React from "react";

import CustomHeader from "../components/layouts/CustomHeader";
import SideNav from "../components/layouts/SideNav";

import mocks from "../components/layouts/mocks";

const Custom = ({children}) => {
  return (
    <>
      <div className="relative">
        <CustomHeader />
      </div>
      <div className="flex">
        <div className="hidden md:block fixed">
          <SideNav data={mocks.sideNav} images={mocks?.images} />
        </div>
        <div className="ml-0 md:ml-[5.3rem]">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Custom;
