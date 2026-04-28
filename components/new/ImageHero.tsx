"use client";

import { useEffect } from "react";
import styles from "../../sass/homeHero.module.scss";

export default function ImageHero({ particleColor = [250 / 255, 175 / 255, 58 / 255] , heroInner = <></> }) {
  return (
    <section className={styles.homeHero} style={{ backgroundImage: `url("/img/cannabis/grow3.jpg")` }}>
      <div className={styles.heroInner}>
        {heroInner}
      </div>
    </section>
  );
}
