import * as React from "react";
import styles from "../sass/portfolioItem.module.scss";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioItem: React.FC<any> = ({ item, square = false }) => {
  return (
    <section className={styles.portfolioItem}>
      <div className={styles.itemContain}>
        {item.image ? (
          <>
            <div
              className={styles.visual}
              style={
                square
                  ? {
                      height: "auto",
                      aspectRatio: "1",
                    }
                  : {}
              }
            >
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

              {item.link ? (
                <div className={styles.buttonContainer}>
                  <a href={item.link} target="_blank">
                    Visit Project{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      width="15px"
                      style={{ marginLeft: "4px" }}
                    />
                  </a>
                </div>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <>
            <h2>{item.description}</h2>
          </>
        )}
      </div>
    </section>
  );
};

export default PortfolioItem;
