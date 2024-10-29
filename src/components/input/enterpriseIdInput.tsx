'use client'

import { useState } from "react";
import VerificationInput from "react-verification-input";

interface Props {
  onValueChange: (value: string) => void;
}

export default function EnterpriseIdInput({ onValueChange }: Props) {
  const [value, setValue] = useState<string>("");

  return (
    <VerificationInput
      placeholder=""
      validChars="0-9"
      length={13}
      value={value}
      onChange={(val: string) => {
        setValue(val);
        onValueChange(val);
      }}
      classNames={{
        container: "container w-full md:w-4/5 lg:w-3/5",
        character: "character border-none rounded-xl shadow-md",
        characterInactive: "character--inactive",
        characterSelected: "character--selected border-2 border-primary",
        characterFilled: "character--filled !text-md",
      }}
    />
  );
}
