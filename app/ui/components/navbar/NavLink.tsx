"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import useHash from "@/app/hooks/useHash";

interface NavLinkProps {
  selected?: boolean;
  active?: boolean;
  href: string;
  label: string;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  active = false,
  onClick,
}) => {
  const activeStyle =
    "neumorph-pressed dark:neumorph-pressed-dark font-bold hover:tracking-[.5em] dark:hover:tracking-[.5em] hover:neumorph-pressed dark:hover:neumorph-pressed-dark focus:neumorph-pressed dark:focus:neumorph-pressed-dark";
  const normalStyle = `navlink dark:navlink-dark p-4 pl-8 lg:p-2 lg:pl-4 rounded-xl tracking-[.5em] hover:font-bold hover:tracking-[.6em] focus-visible:tracking-[.6em] transition-all duration-300`;

  return (
    <Link
      className={`${normalStyle} ${active ? activeStyle : ""}`}
      href={href}
      onClick={() => onClick(false)}
    >
      {label}
    </Link>
  );
};

export default NavLink;
