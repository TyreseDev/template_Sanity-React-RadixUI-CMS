import React from "react";
import HeaderLeftComponent from "./left";
import HeaderRightComponent from "./right";

const HeaderComponent: React.FC = () => (
  <div className="h-10 leading-10 mt-4 flex">
    <div className="w-[40%]">
      <HeaderLeftComponent />
    </div>
    <div className="w-[60%]">
      <HeaderRightComponent />
    </div>
  </div>
);

export default HeaderComponent;
