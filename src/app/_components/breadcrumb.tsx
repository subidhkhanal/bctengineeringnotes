/** @format */
"use client";

import Link from "next/link";
import { useState } from "react";

export function BreadCrumb() {
  const [changeColor, setChangeColor] = useState("none");

  return (
    <div className="flex justify-start custom-font flex-1 max-w-4xl mx-auto border-b-[rgb(227,] border-b-[238)] border-solid border-b">
      <Link
        href="/8thsem"
        onClick={(e) => setChangeColor("1st sem")}
        className={`mr-6 font-medium text-sm h-full pt-[7px] pb-2.5 ${
          changeColor === "1st sem"
            ? "text-[rgb(84,105,212)] border-b-2	 border-solid border-[#635bff]"
            : "text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]"
        }`}
      >
        Engineering Professional Practice
      </Link>
      <h2
        className={`mr-6 font-medium text-sm h-full pt-[7px] pb-2.5 ${
          changeColor === "2nd sem"
            ? "text-[rgb(84,105,212)] border-b-2 border-solid border-[#635bff]"
            : "text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]"
        }`}
      >
        <Link href="/8thsem" onClick={() => setChangeColor("2nd sem")}>
          Information System
        </Link>
      </h2>
      <h2
        className={`mr-6 font-medium text-sm h-full pt-[7px] pb-2.5 ${
          changeColor === "3rd sem"
            ? "text-[rgb(84,105,212)] border-b-2	 border-solid border-[#635bff]"
            : "text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]"
        }`}
      >
        <Link href="/8thsem" onClick={(e) => setChangeColor("3rd sem")}>
          Internet and Intranet
        </Link>
      </h2>
      <h2
        className={`mr-6 font-medium text-sm h-full pt-[7px] pb-2.5 ${
          changeColor === "4th sem"
            ? "text-[rgb(84,105,212)] border-b-2	 border-solid border-[#635bff]"
            : "text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]"
        }`}
      >
        <Link href="/8thsem" onClick={(e) => setChangeColor("4th sem")}>
          Simulation and Modeling
        </Link>
      </h2>
      <h2
        className={`mr-6 font-medium text-sm h-full pt-[7px] pb-2.5 ${
          changeColor === "5th sem"
            ? "text-[rgb(84,105,212)] border-b-2 border-solid border-[#635bff]"
            : "text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]"
        }`}
      >
        <Link href="/8thsem" onClick={(e) => setChangeColor("5th sem")}>
          Big Data Technologies
        </Link>
      </h2>
    </div>
  );
}
