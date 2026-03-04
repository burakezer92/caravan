import React from "react";
import css from "./ReviewCard.module.css";

const ReviewCard = ({ name, rating, review }) => {
  return (
    <div className={css.reviewCard}>
      <div className={css.avatar}>{name.charAt(0)}</div>

      <div className={css.reviewContent}>
        <div className={css.reviewHeader}>
          <h3>{name}</h3>
          <div className={css.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "star filled" : "star"}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <p className={css.reviewText}>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
