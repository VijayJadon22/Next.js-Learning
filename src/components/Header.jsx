import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="h-15 flex justify-between items-center bg-gray-200 w-full px-12 py-10 text-black">
        <h1 className="text-2xl font-bold">New App</h1>
        <ul className="flex gap-12">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/course"}>Course</Link>
          </li>
          <li>
            <Link href={"/settings"}>Settings</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
