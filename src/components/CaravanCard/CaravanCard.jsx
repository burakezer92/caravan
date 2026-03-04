import css from "./CaravanCard.module.css";
import bathroomLogo from "../../assets/bathroom.svg";
import kitchenLogo from "../../assets/cup-hot.svg";
import windLogo from "../../assets/wind.svg";
import radioLogo from "../../assets/radio.svg";
import refrigeratorLogo from "../../assets/refrigerator.svg";
import microwaveLogo from "../../assets/microwave.svg";
import fuelLogo from "../../assets/fuel.svg";
import gasLogo from "../../assets/gas.svg";
import TVLogo from "../../assets/TV.svg";
import locationLogo from "../../assets/location.svg";
import diagram from "../../assets/diagram.svg";
import waterLogo from "../../assets/water.svg";
import { Link } from "react-router-dom";

const CaravanCard = ({ camper }) => {
  const {
    name,
    price,
    rating,
    location,
    description,
    transmission,
    engine,
    AC,
    kitchen,
    gallery,
    reviews,
    water,
    gas,
    microwave,
    bathroom,
    TV,
    radio,
    refrigerator,
  } = camper;

  const shortDescription =
    description.length > 70 ? description.slice(0, 70) + "..." : description;

  return (
    <div className={css.card}>
      <img className={css.image} src={gallery?.[0]?.thumb} alt={name} />

      <div className={css.content}>
        <div className={css.header}>
          <div>
            <h2 className={css.title}>{name}</h2>

            <div className={css.meta}>
              <span className={css.rating}>
                ⭐ {rating} ({reviews?.length} Reviews)
              </span>

              <span className={css.location}>
                <img src={locationLogo} /> {location}
              </span>
            </div>
          </div>

          <div className={css.priceBox}>
            <h2 className={css.price}>€{price.toFixed(2)}</h2>
            <span className={css.heart}>♡</span>
          </div>
        </div>

        <p className={css.description}>{shortDescription}</p>

        <div className={css.features}>
          <div className={css.badge}>
            <img src={diagram} /> {transmission}
          </div>
          <div className={css.badge}>
            <img src={fuelLogo} /> {engine}
          </div>
          {TV && (
            <div className={css.badge}>
              <img src={TVLogo} /> TV
            </div>
          )}
          {kitchen && (
            <div className={css.badge}>
              <img src={kitchenLogo} /> Kitchen
            </div>
          )}
          {AC && (
            <div className={css.badge}>
              <img src={windLogo} /> AC
            </div>
          )}
          {microwave && (
            <div className={css.badge}>
              <img src={microwaveLogo} />
              Microwave
            </div>
          )}
          {water && (
            <div className={css.badge}>
              <img src={waterLogo} />
              Water
            </div>
          )}
          {gas && (
            <div className={css.badge}>
              <img src={gasLogo} />
              Gas
            </div>
          )}
          {bathroom && (
            <div className={css.badge}>
              <img src={bathroomLogo} />
              Bathroom
            </div>
          )}
          {radio && (
            <div className={css.badge}>
              <img src={radioLogo} />
              Radio
            </div>
          )}
          {refrigerator && (
            <div className={css.badge}>
              <img src={refrigeratorLogo} />
              Refrigerator
            </div>
          )}
        </div>

        <Link to={`/catalog/details/${camper.id}`} className={css.button}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CaravanCard;
