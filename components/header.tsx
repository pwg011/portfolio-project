import Link from "next/link";

export function Header() {
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
      <Link className="header-cta" href="/#contact">
        Contact Me
      </Link>
      <button className="mobile-menu" type="button" aria-label="Open menu">
        <span />
      </button>
    </header>
  );
}
