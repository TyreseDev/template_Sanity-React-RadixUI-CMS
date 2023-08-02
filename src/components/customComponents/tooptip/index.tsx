import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

type TooltipComponentPropsType = {
  triggerButton: React.ReactNode;
  content: React.ReactNode;
};

const TooltipComponent: React.FC<TooltipComponentPropsType> = ({
  triggerButton,
  content,
}) => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild className="outline-0">
        {triggerButton}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          sideOffset={5}
          className="bg-gray-200 shadow-2xl p-2 rounded-md text-sm"
        >
          {content}
          <Tooltip.Arrow className="fill-gray-200" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);

export default TooltipComponent;
