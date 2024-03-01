"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  selected?: boolean;
  href: string;
  label: string;
}

const navLinkStyle =
  "navlink dark:navlink-dark p-4 pl-8 lg:p-2 lg:pl-4 rounded-xl tracking-[.5em] hover:font-bold hover:tracking-[.6em] focus-visible:tracking-[.6em] transition-all duration-300";

const NavLink: React.FC<NavLinkProps> = ({ selected, href, label }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link className={navLinkStyle} href={href}>
      {label}
    </Link>
  );
};

export default NavLink;
