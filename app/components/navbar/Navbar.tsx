import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink";

export const Navbar = () => {
  const navItems = [
    {
        path: '/about',
        text: 'About'
    },
    {
        path: '/pricing',
        text: 'Pricing'
    },
    {
        path: '/contact',
        text: 'Contact'
    }
  ];
  return(
    <nav className="flex bg-blue-800 text-white bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className="flex items-center">
          <HomeIcon className="m-2"/>
          <span>HOME</span>
      </Link>
      <div className="flex flex-1"></div>
      {
        navItems.map(({path, text}) =>
          <ActiveLink key={path} path={path} text={text} /> 
        )
      }
    </nav>
  )
}