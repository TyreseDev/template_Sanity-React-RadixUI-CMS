import React from "react";
import { Link } from "react-router-dom";
import {
  Root,
  List,
  Item,
  Indicator,
  Viewport,
} from "@radix-ui/react-navigation-menu";

type NavigationMenuComponentProps = {
  items: {
    label: string;
    href: string;
  }[];
  selected: string;
};

const defaultProps: NavigationMenuComponentProps = {
  items: [],
  selected: "",
};

const NavigationMenuComponent: React.FC<NavigationMenuComponentProps> = ({
  items,
  selected,
}) => (
  <Root>
    <List className="flex">
      {items.map((item: { label: string; href: string }) => (
        <Item
          className={`h-9 leading-9 px-2 mt-[2px] ${
            selected === item.href
              ? "border-b-2 border-[#1B1B18] text-[#1B1B18]"
              : "border-0 text-[#A3A3A3]"
          }`}
          key={item.href}
        >
          <Link to={item.href}>{item.label}</Link>
        </Item>
      ))}
      <Indicator className="NavigationMenuIndicator">
        <div className="Arrow" />
      </Indicator>
    </List>
    <div className="ViewportPosition">
      <Viewport className="NavigationMenuViewport" />
    </div>
  </Root>
);

NavigationMenuComponent.defaultProps = defaultProps;
export default NavigationMenuComponent;
