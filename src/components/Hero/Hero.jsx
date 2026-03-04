import css from "./Hero.module.css";
import BackgroundImage from "../../assets/heroBackground.jpg";
import { Link } from "react-router-dom";
import buttonCss from "../Button/Button.module.css";

function Hero() {
  return (
    <div className={css.heroBox}>
      <img className={css.hero} src={BackgroundImage} alt="" />
      <div className={css.heroTitle}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.subTitle}>
          You can find everything you want in our catalog
        </h2>
        <Link className={buttonCss.button} to="/catalog">
          View Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
