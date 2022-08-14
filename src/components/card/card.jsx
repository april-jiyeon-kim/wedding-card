import React, { useState } from "react";
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
          <img src="imgs/card_front.png" alt="wedding-card" class="card__img" />
        </div>
        <div class={styles.card}>
          <img src="imgs/card_back.png" alt="wedding-card" class="card__img" />
        </div>
      </section>
      <section class={styles.section}>
        <div class={styles.section__container}>
          <h1>우리의 소중한 기억들</h1>
          <div class={styles.wedding__memory}>
            {weddingPhotos.map((photo) => {
              return (
                <>
                  <div class={styles.memory}>
                    <img
                      src={`imgs/${photo}.jpg`}
                      alt={photo}
                      class={styles.memory__img}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
