import style from './Header.module.css';
import { Link } from '../Header/Header.styled';

function Header() {
  return (
    <header className={style.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </header>
  );
}

export default Header;
