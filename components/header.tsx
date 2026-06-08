export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#">
        ALEX DOE
      </a>
      <nav aria-label="Primary navigation">
        <ul className="nav-links">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#github">GitHub</a>
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
