/** @format */
"use client";

import React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

export default function Intro() {
  const Menu = [
    {
      label: "1ST SEM",
      href: "/1stsem",
    },
    {
      label: "2ND SEM",
      href: "/2ndsem",
    },
    {
      label: "3RD SEM",
      href: "/3rdsem",
    },
    {
      label: "4TH SEM",
      href: "/4thsem",
    },
    {
      label: "5TH SEM",
      href: "/5thsem",
    },
    {
      label: "6TH SEM",
      href: "/6thsem",
    },
    {
      label: "7TH SEM",
      href: "/7thsem",
    },
    {
      label: "8TH SEM",
      href: "/8thsem",
    },
  ];
  const mobilemenu = [...Menu];

  return (
    <div className="shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] pb-[7px]">
      <div className="cursor-pointer container mx-auto px-10 pt-6">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <div className="flex justify-between w-full md:w-auto">
                  <div className="flex flex-col">
                    <Link href="/" passHref>
                      <span className="cursor-pointer font-bold text-4xl text-black hover:text-blue-500">
                        BCT NOTES
                      </span>
                    </Link>
                    <span className="font-bold text-xs opacity-80	">
                      Giving Engineering Students Their Life Back
                    </span>
                  </div>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300 "
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
                <div className="flex-col items-center md:block hidden justify-start order-1 w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
                  {Menu.map((item, index) => (
                    <Link href={item.href} key={index} passHref>
                      <p className="px-5 py-2 text-sm font-semibold text-black hover:text-blue-500">
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Link href={item.href} key={index} passHref>
                      <p className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
