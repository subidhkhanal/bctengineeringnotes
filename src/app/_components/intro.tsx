/** @format */
"use client";
import Link from "next/link";
// import { useState } from "react";

export function Intro() {
  // const [activeLink, setActiveLink] = useState("none")

  // function handlelink(link){
  //   setActiveLink(link)
  // }
  return (
    <section className="mb-[45px] h-20 sticky bg-[#f7fafc] z-[1] font-medium text-base border-b-[#e3e8ee] border-b border-solid top-0">
      <div className="flex justify-between ml-1 ">
        <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8">
          <Link href="/">BCT NOTES</Link>
        </h1>
        <h3>Sign In</h3>
      </div>
      <div>
        <div className="flex justify-between">
          <Link href="/1stsem">
            <h2 className="font-medium text-sm text-[rgb(60,66,87)] hover:text-[rgb(26,31,54)]">
              1st Semester
            </h2>
          </Link>
          <h2 className="font-medium text-sm text-[rgb(60,66,87)]">
            <Link href="/2ndsem">2nd Semester</Link>
          </h2>
          <h2 className="font-medium text-sm text-[rgb(60,66,87)]">
            <Link href="/3rdsem">3rd Semester</Link>
          </h2>
          <h2 className="font-medium text-sm text-[rgb(60,66,87)]">
            <Link href="/4thsem">4th Semester</Link>
          </h2>
          <h2 className="font-medium text-sm text-[rgb(60,66,87)]">
            <Link href="/5thsem">5th Semester</Link>
          </h2>
          <h2 className="font-medium text-sm text-[rgb(60,66,87)]">
            <Link href="/6thsem">6th Semester</Link>
          </h2>
          <h2 className="font-medium text-sm text-[rgb(60,66,87)]">
            <Link href="/7thsem">7th Semester</Link>
          </h2>
          <Link href="/8thsem">
            <h2 className="font-medium text-sm text-[rgb(60,66,87)]">
              8th Semester
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
