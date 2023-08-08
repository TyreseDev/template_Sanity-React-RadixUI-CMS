import React from "react";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
} from "@radix-ui/react-dropdown-menu";

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
  <Root>
    <Trigger asChild className="outline-0 cursor-pointer">
      {triggerButton}
    </Trigger>
    <Portal>
      <Content className="bg-white shadow-2xl p-2 rounded-lg">
        {items.map((item: React.ReactNode, itemId: number) => (
          <Item
            key={itemId}
            className="outline-0 hover:opacity-50 cursor-pointer py-1"
          >
            {item}
          </Item>
        ))}
      </Content>
    </Portal>
  </Root>
);

DropDownComponent.defaultProps = defaultProps;
export default DropDownComponent;
