import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

type DropDownComponentProps = {
  triggerButton: React.ReactNode;
  items: React.ReactNode[];
};

const defaultProps: DropDownComponentProps = {
  triggerButton: null,
  items: [],
};

const DropDownComponent: React.FC<DropDownComponentProps> = ({
  triggerButton,
  items,
}) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild className="outline-0 cursor-pointer">
      {triggerButton}
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content className="bg-white shadow-2xl p-2 rounded-lg">
        {items.map((item: React.ReactNode, oid: number) => (
          <DropdownMenu.Item
            key={oid}
            className="outline-0 hover:opacity-50 cursor-pointer py-1"
          >
            {item}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);

DropDownComponent.defaultProps = defaultProps;
export default DropDownComponent;
