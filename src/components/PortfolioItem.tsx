import * as React from "react";
import * as styles from "../sass/portfolioItem.module.scss";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioItem: React.FC<any> = ({ item }) => {
  return (
    <section className={styles.portfolioItem}>
      <div className={styles.itemContain}>
        <div className={styles.visual}>
          <img src={item.image} alt="" title="" />
        </div>
        <div className={styles.info}>
          <h3>{item.title}</h3>
          <div className={styles.badges}>
            {item.badges.map((badge: any, i: number) => {
              return <span key={i}>{badge}</span>;
            })}
          </div>

          <p>{item.description}</p>

          <div className={styles.buttonContainer}>
            <a href={item.link} target="_blank">
              Visit Project <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioItem;
