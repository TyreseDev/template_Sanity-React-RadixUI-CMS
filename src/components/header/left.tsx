import React from "react";
import { Link } from "react-router-dom";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import DropDownComponent from "../customComponents/dropdown";

const HeaderLeftComponent: React.FC = () => (
  <div className="flex">
    <Link to="/">
      <img
        src="/assets/img/logo.png"
        alt="logo"
        className="w-6 h-6 m-2 cursor-pointer"
      />
    </Link>
    <div className="h-10 w-1 border-r-2 border-gray-200 mx-2" />
    <DropDownComponent
      triggerButton={
        <h3 className="h-6 leading-6 flex my-2 text-sm">
          <img
            src="/assets/img/avatar.png"
            alt="avatar"
            className="w-6 h-6 mx-2"
          />
          Teqqed
          <div className="mx-2">
            <CaretUpIcon className="mt-[2px]" />
            <CaretDownIcon className="mt-[-10px]" />
          </div>
        </h3>
      }
      items={[
        <h3 className="h-6 leading-6 flex text-sm">
          <img
            src="/assets/img/avatar.png"
            alt="avatar"
            className="w-6 h-6 mx-2"
          />
          Teqqed
        </h3>,
        <h3 className="h-6 leading-6 flex text-sm">
          <img
            src="/assets/img/avatar.png"
            alt="avatar"
            className="w-6 h-6 mx-2"
          />
          Teqqed
        </h3>,
      ]}
    />
  </div>
);

export default HeaderLeftComponent;
