import { useState } from "react";
import css from "./CaravanDetails.module.css";
import ReviewCard from "../page/Catalog/ReviewCard";

import bathroomLogo from "../assets/bathroom.svg";
import kitchenLogo from "../assets/cup-hot.svg";
import windLogo from "../assets/wind.svg";
import radioLogo from "../assets/radio.svg";
import refrigeratorLogo from "../assets/refrigerator.svg";
import microwaveLogo from "../assets/microwave.svg";
import fuelLogo from "../assets/fuel.svg";
import gasLogo from "../assets/gas.svg";
import TVLogo from "../assets/TV.svg";
import waterLogo from "../assets/water.svg";
import diagram from "../assets/diagram.svg";

const CaravanDetails = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");

  if (!camper) return null;

  const {
    name,
    price,
    rating,
    location,
    description,
    gallery = [],
    transmission,
    engine,
    AC,
    kitchen,
    radio,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    water,
    microwave,
    refrigerator,
    bathroom,
    gas,
    TV,
    reviews = [],
  } = camper;

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{name}</h2>

      <div className={css.meta}>
        ⭐ {rating} | 📍 {location}
      </div>

      <div className={css.price}>€{price?.toFixed(2)}</div>

      <div className={css.gallery}>
        {gallery.map((img, index) => (
          <img key={index} src={img.thumb} alt={name} />
        ))}
      </div>

      <p className={css.description}>{description}</p>

      <div className={css.tabs}>
        <button
          className={activeTab === "features" ? css.active : ""}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>

        <button
          className={activeTab === "reviews" ? css.active : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={css.grid}>
        <div className={css.left}>
          {activeTab === "features" && (
            <>
              <div className={css.badges}>
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
                    <img src={microwaveLogo} alt="" /> Microwave
                  </div>
                )}

                {water && (
                  <div className={css.badge}>
                    <img src={waterLogo} alt="" /> Water
                  </div>
                )}

                {gas && (
                  <div className={css.badge}>
                    <img src={gasLogo} alt="" /> Gas
                  </div>
                )}

                {bathroom && (
                  <div className={css.badge}>
                    <img src={bathroomLogo} alt="" /> Bathroom
                  </div>
                )}

                {radio && (
                  <div className={css.badge}>
                    <img src={radioLogo} alt="" /> Radio
                  </div>
                )}

                {refrigerator && (
                  <div className={css.badge}>
                    <img src={refrigeratorLogo} alt="" /> Refrigerator
                  </div>
                )}
              </div>

              <h3>Vehicle details</h3>

              <div className={css.details}>
                <div>
                  <span>Form</span>
                  <span>{form}</span>
                </div>
                <div>
                  <span>Length</span>
                  <span>{length}</span>
                </div>
                <div>
                  <span>Width</span>
                  <span>{width}</span>
                </div>
                <div>
                  <span>Height</span>
                  <span>{height}</span>
                </div>
                <div>
                  <span>Tank</span>
                  <span>{tank}</span>
                </div>
                <div>
                  <span>Consumption</span>
                  <span>{consumption}</span>
                </div>
              </div>
            </>
          )}

          {activeTab === "reviews" && (
            <div>
              {reviews.length === 0 ? (
                <p>No reviews yet.</p>
              ) : (
                reviews.map((review, index) => (
                  <ReviewCard
                    key={index}
                    name={review.reviewer_name}
                    rating={review.reviewer_rating}
                    review={review.comment}
                  />
                ))
              )}
            </div>
          )}
        </div>

        <div className={css.formBox}>
          <h3>Book your campervan now</h3>
          <p>Stay connected! We are always ready to help you.</p>

          <form className={css.form}>
            <input type="text" placeholder="Name*" required />
            <input type="email" placeholder="Email*" required />
            <input type="date" required />
            <textarea placeholder="Comment" rows="4"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CaravanDetails;
