import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="hidden lg:block fixed z-30 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8">
      <nav className="lg:text-sm lg:leading-6 relative">
        <ul className="flex space-x-8">
          <li>
            <Link href="/epoch">Epoch Time Converter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
