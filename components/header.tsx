"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

export function Header() {
  const pathname = usePathname();

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (pathname === "/") {
      window.history.pushState(null, "", "/#contact");
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.location.href = "/#contact";
  };

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        WEB DEVELOPER
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="nav-links">
          <li>
            <Link href="/#work">Projects</Link>
          </li>
          <li>
            <Link href="/#services">Services</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
        </ul>
      </nav>
      <Link className="header-cta" href="/#contact" onClick={handleContactClick}>
        Contact Me
      </Link>
      <button className="mobile-menu" type="button" aria-label="Open menu">
        <span />
      </button>
    </header>
  );
}
