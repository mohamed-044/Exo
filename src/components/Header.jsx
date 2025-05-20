import logo from '../assets/logo.webp';
import '../assets/styles/header.scss';
function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt="Un mexicain avec un chapeau qui joue de la guitare" />
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