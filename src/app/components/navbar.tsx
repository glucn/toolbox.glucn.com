import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500">
      <div className="relative flex items-center py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
        <div className="flex font-semibold">
          <a
            className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
            href="/"
          >
            GLUCN
          </a>
        </div>
        <nav className="ml-auto lg:flex text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
          <ul className="flex space-x-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="https://glucn.github.io/" target="_blank">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
