/** @format */
"use client";
import Link from "next/link";
import { useState } from "react";

export function Intro() {
  const [changeColor, setChangeColor] = useState("none");

  function handlechange() {
    console.log("testing");
  }
  return (
    <section className="pl-6 mb-[45px] sticky bg-[#f7fafc] z-[1] font-medium text-base border-b-[#e3e8ee] border-b border-solid top-0">
      <div className="flex h-[100px] flex-col">
        <div className="flex justify-between mt-2">
          <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8">
            <Link href="/">BCT NOTES</Link>
          </h1>
          <h3>Sign In</h3>
        </div>
        <div className="flex justify-start custom-font flex-1">
          <h2
            className={`mr-6 font-medium text-sm h-full pt-[7px] pb-2.5 ${
              changeColor === "1st sem"
                ? "text-[rgb(84,105,212)] border-b-2	 border-solid border-[#635bff]"
                : "text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]"
            }`}
          >
            <Link href="/8thsem" onClick={(e) => setChangeColor("1st sem")}>
              1st Semester
            </Link>
          </h2>
          <h2
            className={`mr-6 font-medium text-sm h-full pt-[7px] pb-2.5 ${
              changeColor === "2nd sem"
                ? "text-[rgb(84,105,212)] border-b-2 border-solid border-[#635bff]"
                : "text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]"
            }`}
          >
            <Link href="/8thsem" onClick={() => setChangeColor("2nd sem")}>
              2nd Semester
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
              3rd Semester
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
              4th Semester
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
              5th Semester
            </Link>
          </h2>
          <h2
            className={`mr-6 font-medium text-sm h-full pt-[7px] pb-2.5 ${
              changeColor === "6th sem"
                ? "text-[rgb(84,105,212)] border-b-2 border-solid border-[#635bff]"
                : "text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]"
            }`}
          >
            <Link href="/8thsem" onClick={(e) => setChangeColor("6th sem")}>
              6th Semester
            </Link>
          </h2>
          <h2
            className={`mr-6 font-medium text-sm h-full pt-[7px] pb-2.5 ${
              changeColor === "7th sem"
                ? "text-[rgb(84,105,212)] border-b-2	 border-solid border-[#635bff]"
                : "text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]"
            }`}
          >
            <Link href="/8thsem" onClick={(e) => setChangeColor("7th sem")}>
              7th Semester
            </Link>
          </h2>
          <div>
            <h2
              className={`mr-6 font-medium text-sm h-full pt-[7px] pb-2.5 ${
                changeColor === "8th sem"
                  ? "text-[rgb(84,105,212)] border-b-2	 border-solid border-[#635bff]"
                  : "text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]"
              }`}
            >
              <Link href="/8thsem" onClick={(e) => setChangeColor("8th sem")}>
                8th Semester
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
