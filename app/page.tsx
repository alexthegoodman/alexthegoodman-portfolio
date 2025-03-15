import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.scss";

import Link from "next/link";
import {
  faArrowRight,
  faCode,
  faAd,
  faRadio,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.launchHero}>
        <div className={styles.contain}>
          <h1>What are you looking for?</h1>
          <div className={styles.features}>
            <Link href="/development" className={styles.feature}>
              <FontAwesomeIcon icon={faCode} width="45px" />
              <span>Software Engineering / Web Development</span>
            </Link>
            <Link href="/marketing" className={styles.feature}>
              <FontAwesomeIcon icon={faAd} width="45px" />
              <span>Digital Marketing</span>
            </Link>
            <Link href="/pcb-design" className={styles.feature}>
              <FontAwesomeIcon icon={faRadio} width="45px" />
              <span>PCB Design</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
