import * as React from "react";
import NavItem from "./navItem";

const Nav = () => {
  return (
    <>
    <nav id="main-nav" className="hidden lg:block md:items-center w-full md:w-auto">
      <ul className="flex items-center justify-between flex-wrap">
        <NavItem content="Home" link="/" inLength="0" outLength="1" />
        <NavItem content="About" link="/about" inLength="0" outLength="1" />
        <li className="nav-item"><a href="http://localhost:3000/" target="_blank" rel="noreferrer">Styles</a></li>
        <li className="nav-item"><a href="http://localhost:8000/___graphql" target="_blank" rel="noreferrer">Query Database</a></li>
        <li className="nav-item"><a href="http://localhost:3333/" target="_blank" rel="noreferrer">CMS</a></li>
      </ul>
    </nav>
    <div id="nav-burger" className="block lg:hidden flex items-center justify-center">
      <button className="inline-flex items-center justify-center p-0 transition-colors duration-500 border-2 rounded-full focus:border-primary hover:border-primary hover:text-primary focus:outline-none"
        type="button">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="9" width="20" height="2" rx="1" fill="currentColor" transform-origin="16px 10px"></rect>
          <rect x="6" y="15" width="20" height="2" rx="1" fill="currentColor" opacity="1"></rect>
          <rect x="6" y="21" width="20" height="2" rx="1" fill="currentColor" transform-origin="16px 22px"></rect>
        </svg>
      </button>
    </div>
    </>
  )
}

export default Nav;
