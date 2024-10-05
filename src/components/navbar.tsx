"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import { navData } from "@/constants/navigate";
import { HamburgerIcon } from "@/components/icons";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MenuItem from "@/types/MenuItem";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const items: MenuItem[] = navData;
  
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent
        className="basis-1/5 sm:basis-full"
        justify="start"
      >
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img src="/logos/k.png" height={24} width={24} />
            <p className="font-bold text-inherit">Keep</p>
          </NextLink>
        </NavbarBrand>

        <nav className="flex flex-row h-full">
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
                  className="h-full"
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
                      className="h-full"
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
                            placement="right"
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
                                      placement="right"
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
      </NavbarContent>

      {/* <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <button onClick={() => console.log("clicked!")}>
            <HamburgerIcon className="text-danger" />
          </button>
        </NavbarItem>
      </NavbarContent> */}
    </NextUINavbar>
  );
};
