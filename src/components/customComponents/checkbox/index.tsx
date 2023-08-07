import React from "react";
import { CheckIcon, DotFilledIcon } from "@radix-ui/react-icons";

type CheckboxComponentProps = {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  immediate?: boolean;
  label?: React.ReactNode;
};

const defaultProps: CheckboxComponentProps = {
  checked: false,
  setChecked: () => {},
  immediate: false,
  label: null,
};

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  checked,
  setChecked,
  immediate,
  label,
}) => {
  return (
    <div className="flex items-center" onClick={() => setChecked(!checked)}>
      <div
        className={`h-[15px] w-[15px] rounded text-white ${
          checked || immediate
            ? "bg-[#377FE9]"
            : "bg-white border border-[#DDDDDD]"
        }`}
      >
        {checked && !immediate && <CheckIcon />}
        {immediate && <DotFilledIcon />}
      </div>
      {label && <span className="ml-2">{label}</span>}
    </div>
  );
};

CheckboxComponent.defaultProps = defaultProps;
export default CheckboxComponent;
