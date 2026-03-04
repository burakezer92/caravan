import { useEffect, useState } from "react";
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
    id,
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

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter((favId) => favId !== id);
    } else {
      updated = [...favorites, id];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(updated.includes(id));
  };

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
                <img src={locationLogo} alt="" /> {location}
              </span>
            </div>
          </div>

          <div className={css.priceBox}>
            <h2 className={css.price}>€{price.toFixed(2)}</h2>
            <span
              className={css.heart}
              onClick={toggleFavorite}
              style={{ cursor: "pointer", color: isFavorite ? "red" : "black" }}
            >
              {isFavorite ? "♥" : "♡"}
            </span>
          </div>
        </div>

        <p className={css.description}>{shortDescription}</p>

        <div className={css.features}>
          <div className={css.badge}>
            <img src={diagram} alt="" /> {transmission}
          </div>
          <div className={css.badge}>
            <img src={fuelLogo} alt="" /> {engine}
          </div>
          {TV && (
            <div className={css.badge}>
              <img src={TVLogo} alt="" /> TV
            </div>
          )}
          {kitchen && (
            <div className={css.badge}>
              <img src={kitchenLogo} alt="" /> Kitchen
            </div>
          )}
          {AC && (
            <div className={css.badge}>
              <img src={windLogo} alt="" /> AC
            </div>
          )}
          {microwave && (
            <div className={css.badge}>
              <img src={microwaveLogo} alt="" />
              Microwave
            </div>
          )}
          {water && (
            <div className={css.badge}>
              <img src={waterLogo} alt="" />
              Water
            </div>
          )}
          {gas && (
            <div className={css.badge}>
              <img src={gasLogo} alt="" />
              Gas
            </div>
          )}
          {bathroom && (
            <div className={css.badge}>
              <img src={bathroomLogo} alt="" />
              Bathroom
            </div>
          )}
          {radio && (
            <div className={css.badge}>
              <img src={radioLogo} alt="" />
              Radio
            </div>
          )}
          {refrigerator && (
            <div className={css.badge}>
              <img src={refrigeratorLogo} alt="" />
              Refrigerator
            </div>
          )}
        </div>

        <Link to={`/catalog/details/${id}`} className={css.button}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CaravanCard;
