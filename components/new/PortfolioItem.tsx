"use client";

import { useEffect } from "react";
import styles from "../../sass/new/portfolioItem.module.scss";

export default function PortfolioItem({
  side = "left",
  imageSrc = "",
  title = "",
  tagline = "",
  description = "",
  points = [],
  githubLink = "#",
}: {
  side: "left" | "right";
  imageSrc: string;
  title: string;
  tagline: string;
  description: string;
  points: [string, string][];
  githubLink: string;
}) {
  return (
    <section className={styles.portfolioItem}>
      <div
        className={`${styles.itemInner} ${
          side === "left" ? styles.leftSide : styles.rightSide
        }`}
      >
        <div className={styles.left}>
          <img className={styles.itemImage} src={imageSrc} />
        </div>
        <div className={styles.right}>
          <h2 className={styles.itemTitle}>{title}</h2>
          <p className={styles.tagline}>{tagline}</p>
          <p className={styles.itemDescription}>{description}</p>
          <ul className={styles.featuresList}>
            {points.map(([pointTitle, pointDesc], index) => (
              <li key={index}>
                <strong>{pointTitle}</strong> - {pointDesc}
              </li>
            ))}
          </ul>
          <a href={githubLink} target="_blank">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
