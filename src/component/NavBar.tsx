"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import {
  mobileMainNavData,
  mobileSubNavData,
  navData,
} from "@/constant/navigate";
import { Button } from "@nextui-org/button";
import MenuItem from "@/type/MenuItem";
import Image from "next/image";

const NestedDropdown: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  return (
    <div className="flex flex-row w-full py-2 px-4">
      <Image src="/success.jpg" alt="logo" height={30} width={60} />
      <nav className="flex flex-row gap-4">
        {items.map((item) => {
          if (item.child.length === 0) {
            return (
              <Button key={`${item.id}`} variant="flat">
                {item.name}
              </Button>
            );
          } else {
            return (
              <Dropdown key={`${item.id} dropdown`} closeOnSelect={false}>
                <DropdownTrigger>
                  <Button variant="flat">{item.name}</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label={`${item.name} Menu`}>
                  {item.child.map((child) => (
                    <DropdownItem key={`${child.id} choice`}>
                      {child.child.length == 0 ? (
                        child.name
                      ) : (
                        <Dropdown 
                          key={`${child.id} dropdown`}
                          placement="bottom"
                          closeOnSelect={false}
                        >
                          <DropdownTrigger>
                            <button className="w-full outline-none flex flex-row justify-between">
                              <p>{child.name}</p>
                              <p>{">"}</p>
                            </button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label={`${child.name} Menu`}>
                            {child.child.map((grandch) => (
                              <DropdownItem key={`${grandch.id} choice`}>
                                {grandch.child.length == 0 ? (
                                  grandch.name
                                ) : (
                                  <Dropdown
                                    key={`${child.id} dropdown`}
                                    placement="bottom"
                                    closeOnSelect={false}
                                  >
                                    <DropdownTrigger>
                                      <button className="w-full outline-none flex flex-row justify-between">
                                        <p>{grandch.name}</p>
                                        <p>{">"}</p>
                                      </button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                      aria-label={`${grandch.name} Menu`}
                                    >
                                      <>{/* will be implemented */}</>
                                    </DropdownMenu>
                                  </Dropdown>
                                )}
                              </DropdownItem>
                            ))}
                          </DropdownMenu>
                        </Dropdown>
                      )}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            );
          }
        })}
      </nav>
    </div>
  );
};

function TestNav() {
  return (
    <div>
      <NestedDropdown items={navData} />
    </div>
  );
}
function MobileNav() {
  return (
    <div>
      <NestedDropdown items={navData} />
    </div>
  );
}

function WindowNav() {
  return (
    <div>
      <NestedDropdown items={navData} />
    </div>
  );
}

export default function NavBar() {
  return (
    <>
      <nav className="w-screen">
        {/* <MobileNav /> */}
        {/* <WindowNav /> */}
        <TestNav />
      </nav>
    </>
  );
}
