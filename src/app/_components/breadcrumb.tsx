/** @format */
"use client";

import { usePathname } from "next/navigation";

export function BreadCrumb() {
  const pathname = usePathname();
  return <div className="max-w-2xl mx-auto"> {pathname}</div>;
}
