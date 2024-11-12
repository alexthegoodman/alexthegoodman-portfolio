import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.scss";

import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.pcbHero}>
        <div className={styles.contain}>
          <div className={styles.left}>
            <h1>
              {"Hi, I'm"} <br />
              {"Alex Woodman"}
            </h1>
            <h2>PCB Designer</h2>
            <p>
              From 10+ years as a software developer, I gained an understanding
              for logic, mathematics, and module selection.
            </p>
            <p>
              {`Now, I'm excited to leverage my talents to design and layout
              circuits and am actively seeking mentors.`}
            </p>
          </div>
          <div className={styles.right}>
            <img src="/img/pcb/board2.png" />
          </div>
        </div>
      </section>
      <section className={styles.pcbInfo}>
        <div className={styles.contain}>
          <div className={styles.top}>
            <h4>Continuing to Grow</h4>
            <ul>
              <li>
                Basic component selection, research, and datasheet analysis
              </li>
              <li>Multi-layer board layouts</li>
              <li>Calculating between units, calculating values</li>
              <li>Knowledge of digital logic and analog fundamentals</li>
            </ul>
          </div>
          <div className={styles.bottom}>
            <img src="/img/pcb/board1_horiz.png" />
          </div>
        </div>
      </section>
      <section className={styles.gallery}>
        <div className={styles.contain}>
          <h3>Schema Gallery</h3>
          <div className={styles.grid}>
            <img src="/img/pcb/schema1.png" />
            <img src="/img/pcb/schema2.png" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
