import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

type NavigationMenuComponentProps = {
  items: {
    label: string;
    href: string;
  }[];
  selected: string;
};

const NavigationMenuComponent: React.FC<NavigationMenuComponentProps> = ({
  items,
  selected,
}) => (
  <NavigationMenu.Root>
    <NavigationMenu.List className="flex">
      {items.map((item: { label: string; href: string }) => (
        <NavigationMenu.Item
          className={
            (selected === item.href
              ? "border-b-2 border-black"
              : "border-0 text-[#A3A3A3]") +
            " h-9 leading-9 px-2 mt-[2px] text-sm"
          }
          key={item.href}
        >
          <Link to={item.href}>{item.label}</Link>
        </NavigationMenu.Item>
      ))}
      <NavigationMenu.Indicator className="NavigationMenuIndicator">
        <div className="Arrow" />
      </NavigationMenu.Indicator>
    </NavigationMenu.List>

    <div className="ViewportPosition">
      <NavigationMenu.Viewport className="NavigationMenuViewport" />
    </div>
  </NavigationMenu.Root>
);

export default NavigationMenuComponent;
