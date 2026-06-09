export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#">
        WEB DEVELOPER
      </a>
      <nav aria-label="Primary navigation">
        <ul className="nav-links">
          <li>
            <a href="#work">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
      <a className="header-cta" href="#contact">
        Contact Me
      </a>
      <button className="mobile-menu" type="button" aria-label="Open menu">
        <span />
      </button>
    </header>
  );
}
