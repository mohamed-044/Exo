import logo from '../assets/logo.webp';
function Header() {
  return (
    <header>
      <img src={logo} alt="Un mexicain avec un chapeau qui joue de la guitare" />
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;