'use client';

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import NextLink from 'next/link';
import { navData } from '@/constants/navigate';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MenuItem from '@/types/MenuItem';
import Image from 'next/image';
import { getCookie } from '@/services/cookie';
import { useEffect, useState } from 'react';
import { Avatar } from '@nextui-org/react';

export default function Navbar() {
  const router = useRouter();
  const items: MenuItem[] = navData;

  const [businessName, setBusinessName] = useState<string | null>(null);

  useEffect(() => {
    const name = decodeURIComponent(getCookie('BussinessName') as string);
    setBusinessName(name);
  }, []);

  return (
    <NextUINavbar maxWidth="2xl" position="sticky" className="px-10">
      <NavbarContent className="basis-full w-full grid grid-cols-[120px_1fr_320px]">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="/logos/k.png" alt="logo" height={24} width={24} />
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
                                <p>{'>'}</p>
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
                                          <p>{'>'}</p>
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

        <div className="flex gap-2 justify-self-end">
          <Avatar
            alt={`company-logo`}
            className="w-6 h-6"
            src="/company-logo/logo-3.png"
          />
          <p className="text-black">{businessName}</p>
        </div>
      </NavbarContent>
    </NextUINavbar>
  );
}
