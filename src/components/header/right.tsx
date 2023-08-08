import React from "react";
import {
  BellIcon,
  GearIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import DropDownComponent from "../customComponents/dropdown";
import TooltipComponent from "../customComponents/tooltip";

const HeaderRightComponent: React.FC = () => (
  <div className="flex float-right">
    <div className="relative mr-4">
      <span className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400">
        <MagnifyingGlassIcon />
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="pl-12 pr-16 py-2 bg-[#F9F9F8] border-0 outline-0 rounded-lg w-80 h-10"
      />
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 w-11 h-[30px] bg-[#F1F1F1] rounded-lg hover:bg-gray-200 leading-[30px]">
        <span>⌘ K</span>
      </button>
    </div>
    <TooltipComponent
      triggerButton={
        <button className="h-8 my-1 mx-3 px-1">
          <QuestionMarkCircledIcon />
        </button>
      }
      content="Help"
    />
    <DropDownComponent
      triggerButton={
        <button className="h-8 my-1 mx-3 px-1">
          <TooltipComponent
            triggerButton={<BellIcon />}
            content="Notifications"
          />
        </button>
      }
      items={["No notifications..."]}
    />
    <DropDownComponent
      triggerButton={
        <img
          src="/assets/img/avatar.svg"
          alt="avatar"
          className="h-8 my-1 mx-2"
        />
      }
      items={[
        <div className="flex">
          <GearIcon className="h-5" />
          &nbsp;User Settings
        </div>,
        <div className="flex">
          <LockClosedIcon className="h-5" />
          &nbsp;Logout
        </div>,
      ]}
    />
  </div>
);

export default HeaderRightComponent;
