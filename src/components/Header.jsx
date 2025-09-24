import React from "react";

const Header = () => {
  return (
    <header>
      <div className="h-15 flex justify-between items-center bg-gray-200 w-full px-12 py-10 text-black">
        <h1 className="text-2xl font-bold">New App</h1>
        <ul className="flex gap-12">
          <li>Home</li>
          <li>About</li>
          <li>Settings</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
