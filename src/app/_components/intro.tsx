/** @format */
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-center  mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">BCT Engineering Notes</Link>
      </h1>
    </section>
  );
}
