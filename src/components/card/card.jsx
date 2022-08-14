import React from "react";
import styles from "./card.module.css";

const Card = () => {
  const weddingPhotos = [
    "photo_1",
    "photo_2",
    "photo_3",
    "photo_4",
    "photo_5",
    "photo_6",
  ];

  return (
    <>
      <section id="wedding_card" class={styles.section}>
        <div class={styles.card}>
          <img
            src="imgs/card_front.png"
            alt="wedding-card"
            class={styles.card__img}
          />
        </div>
        <div class={styles.card}>
          <img
            src="imgs/card_back.png"
            alt="wedding-card"
            class={styles.card__img}
          />
        </div>
      </section>
    </>
  );
};

export default Card;
