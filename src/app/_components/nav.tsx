/** @format */
import Link from "next/link";

export function Nav() {
  return (
    <section>
      <div className="flex justify-between mb-10">
        <h2 className="font-bold">
          <Link href="/1stsem">1st Semester</Link>
        </h2>
        <h2 className="font-bold">
          <Link href="/2ndsem">2nd Semester</Link>
        </h2>
        <h2 className="font-bold">
          <Link href="/3rdsem">3rd Semester</Link>
        </h2>
        <h2 className="font-bold">
          <Link href="/4thsem">4th Semester</Link>
        </h2>
        <h2 className="font-bold">
          <Link href="/5thsem">5th Semester</Link>
        </h2>
        <h2 className="font-bold">
          <Link href="/6thsem">6th Semester</Link>
        </h2>
        <h2 className="font-bold">
          <Link href="/7thsem">7th Semester</Link>
        </h2>
        <h2 className="font-bold">
          <Link href="/8thsem">8th Semester</Link>
        </h2>
      </div>
    </section>
  );
}
