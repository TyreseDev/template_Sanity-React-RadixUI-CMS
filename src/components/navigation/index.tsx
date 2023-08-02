import React from "react";
import { useLocation } from "react-router";
import NavigationMenuComponent from "../customComponents/navigationMenu";

const NavigationComponent: React.FC = () => {
  const items = [
    {
      label: "Overview",
      href: "/overview",
    },
    {
      label: "Tasks",
      href: "/tasks",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Payments",
      href: "/payments",
    },
    {
      label: "Payments",
      href: "/users",
    },
  ];

  const current = useLocation().pathname;
  return <NavigationMenuComponent selected={current} items={items} />;
};

export default NavigationComponent;
