import css from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={css.headerBox}>
      <Link to="/">
        <img className={css.appLogo} src={Logo} />
      </Link>
      <div className={css.linkBox}>
        <Link className={css.link} to="/">
          Home
        </Link>
        <Link className={css.link} to="/catalog">
          Catalog
        </Link>
      </div>
    </div>
  );
}

export default Header;
