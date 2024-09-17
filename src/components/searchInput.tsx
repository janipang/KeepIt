import { Input } from "@nextui-org/input";
import { SearchIcon } from "./icons";
import { InputProps } from "@nextui-org/react"; // Assuming InputProps from Next UI

interface SearchInputProps extends InputProps {}

export default function SearchInput({...props }: SearchInputProps) {
  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      {...props}
    />
  );
}
