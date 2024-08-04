/** @format */
"use client";
import Link from "next/link";
// import { useState } from "react";

export function Intro() {
  return (
    <section className="pl-6 mb-[45px] h-[100px] sticky bg-[#f7fafc] z-[1] font-medium text-base border-b-[#e3e8ee] border-b border-solid top-0">
      <div className="flex justify-between">
        <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8">
          <Link href="/">BCT NOTES</Link>
        </h1>
        <h3>Sign In</h3>
      </div>
      <div className="h-12 flex items-center">
        <div className="flex justify-start custom-font">
          <h2 className="mr-6 font-medium text-sm text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]">
            <Link href="/8thsem"> 1st Semester</Link>
          </h2>
          <h2 className="mr-6 font-medium text-sm text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]">
            <Link href="/8thsem">2nd Semester</Link>
          </h2>
          <h2 className="mr-6 font-medium text-sm text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]">
            <Link href="/8thsem">3rd Semester</Link>
          </h2>
          <h2 className="mr-6 font-medium text-sm text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]">
            <Link href="/8thsem">4th Semester</Link>
          </h2>
          <h2 className="mr-6 font-medium text-sm text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]">
            <Link href="/8thsem">5th Semester</Link>
          </h2>
          <h2 className="mr-6 font-medium text-sm text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]">
            <Link href="/8thsem">6th Semester</Link>
          </h2>
          <h2 className="mr-6 font-medium text-sm text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]">
            <Link href="/8thsem">7th Semester</Link>
          </h2>
          <h2 className="mr-6 font-medium text-sm text-[rgb(60,66,87)] hover:text-[rgb(0,0,0)]">
            <Link href="/8thsem"> 8th Semester</Link>
          </h2>
        </div>
      </div>
    </section>
  );
}
