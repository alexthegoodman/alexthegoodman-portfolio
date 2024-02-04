import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.scss";

import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.innerHeader}>
          <div className={styles.logo}>
            <img
              src="/img/logo.svg"
              alt="Alex Woodman - Senior Front End Engineer"
              title="Alex Woodman - Senior Front End Engineer"
            />
          </div>
          <div className={styles.statement}>
            <h1>What are you looking for?</h1>
          </div>
        </div>
      </header>
      <section className={styles.services}>
        <div className={styles.innerServices}>
          <section className={styles.service}>
            <div className={styles.innerService}>
              <h2>Full-Stack Development</h2>
              <p>Build and maintain web and mobile applications</p>
              <Link className={styles.link} href="/development">
                View Portfolio{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  width="15px"
                  style={{ marginLeft: "4px" }}
                />
              </Link>
            </div>
          </section>
          <section className={styles.service}>
            <div className={styles.innerService}>
              <h2>Digital Marketing</h2>
              <p>Create and manage your ads, content, and social</p>
              <Link className={styles.link} href="/marketing">
                View Portfolio{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  width="15px"
                  style={{ marginLeft: "4px" }}
                />
              </Link>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
