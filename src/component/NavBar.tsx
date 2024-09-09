"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import {
  mobileMainNavData,
  mobileSubNavData,
  navData,
} from "@/constant/navigate";
import { Button } from "@nextui-org/button";
import MenuItem from "@/type/MenuItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NestedDropdown: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  const router = useRouter();
  return (
    <div className="flex flex-row w-full justify-between px-6 bg-primary">
      {/* nav group */}
      <div className="flex flex-row gap-4">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src="/logos/klean.png"
            alt="logo"
            height={20}
            width={30}
            className="w-full h-full"
          />
        </button>
        <nav className="flex flex-row">
          {items.map((item) => {
            if (item.child.length === 0) {
              return (
                <Button
                  key={`${item.id}`}
                  radius="none"
                  variant="light"
                  onClick={() => {
                    router.push(item.path);
                  }}
                >
                  {item.name}
                </Button>
              );
            } else {
              return (
                <Dropdown key={`${item.id} dropdown`} closeOnSelect={false}>
                  <DropdownTrigger>
                    <Button
                      radius="none"
                      variant="light"
                      onClick={() => {
                        router.push(item.path);
                      }}
                    >
                      {item.name}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label={`${item.name} Menu`}>
                    {item.child.map((child) => (
                      <DropdownItem key={`${child.id} choice`}>
                        {child.child.length == 0 ? (
                          <Link href={child.path}>{child.name}</Link>
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
                                    <Link href={grandch.path}>
                                      {grandch.name}
                                    </Link>
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
      {/* user group */}
      <div className="flex flex-row gap-2">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          size="sm"
        />
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          size="sm"
        />
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          size="sm"
        />
      </div>
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
