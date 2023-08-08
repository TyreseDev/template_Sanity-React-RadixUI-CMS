import React from "react";
import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";

type TooltipComponentPropsType = {
  triggerButton: React.ReactNode;
  content: React.ReactNode;
};

const defaultProps: TooltipComponentPropsType = {
  triggerButton: null,
  content: null,
};

const TooltipComponent: React.FC<TooltipComponentPropsType> = ({
  triggerButton,
  content,
}) => (
  <Provider>
    <Root>
      <Trigger asChild className="outline-0">
        {triggerButton}
      </Trigger>
      <Portal>
        <Content
          sideOffset={5}
          className="bg-gray-200 shadow-2xl p-2 rounded-lg"
        >
          {content}
          <Arrow className="fill-gray-200" />
        </Content>
      </Portal>
    </Root>
  </Provider>
);

TooltipComponent.defaultProps = defaultProps;
export default TooltipComponent;
