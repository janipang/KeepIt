import { Button, ButtonProps } from "@nextui-org/button";
import { forwardRef } from "react";
import { ArrowDropDownIcon, PlusIcon } from "../icons";

interface Props extends ButtonProps {
  children?: React.ReactNode;
}
const CreateButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => {
    const { className, ...restProps } = props; // Destructure and omit className

    return (
      <Button
        ref={ref}
        radius="full"
        size="sm"
        className="text-black border-1 border-primary bg-white hover:border-primary-dark"
        startContent={<PlusIcon className="text-black" />}
        endContent={<ArrowDropDownIcon className="text-black" />}
        {...restProps}
      >
        {children}
      </Button>
    );
  }
);
CreateButton.displayName = 'CreateButton';

export default CreateButton;
