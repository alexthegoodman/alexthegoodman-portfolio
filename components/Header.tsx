import * as React from "react";
import styles from "../sass/header.module.scss";
import Link from "next/link";

const Header: React.FC<any> = ({ blackLinks = false }) => {
  return (
    <header className={styles.header}>
      <div className={styles.contain}>
        <Link href="/" className={styles.logo}>
          <img src={blackLinks ? "/img/logo.svg" : "/img/logo_w.svg"} alt="Alex Goodman" title="Alex Goodman" />
          {/* <h2>
            <span>Alex The</span>
            <span>Goodman</span>
          </h2> */}
        </Link>
        <div className={styles.navigation}>
          <nav>
            <ul>
              {/* <li>
                <a
                  href="https://www.facebook.com/alexthegoodman"
                  target="_blank"
                >
                  React Tips and Links
                </a>
              </li> */}
              <li>
                <Link
                  className={styles.highlightLink}
                  href="/microblog"
                  style={{ color: blackLinks ? "black" : "white" }}
                >
                  Microblog
                </Link>
              </li>
              <li>
                <Link
                  className={styles.highlightLink}
                  href="/repos"
                  style={{ color: blackLinks ? "black" : "white" }}
                >
                  Open Source Work
                </Link>
              </li>
              <li>
                <Link
                  className={styles.highlightLink}
                  href="/pricing"
                  style={{ color: blackLinks ? "black" : "white" }}
                >
                  Pricing
                </Link>
              </li>
              {/* <li>
                <Link
                  className={styles.highlightLink}
                  href="/case-studies"
                  style={{ color: blackLinks ? "black" : "white" }}
                >
                  Case Studies
                </Link>
              </li> */}
              <li>
                <a
                  className={styles.highlightLink}
                  href="mailto:alexthegoodman@gmail.com"
                  target="_blank"
                  style={{ color: blackLinks ? "black" : "white" }}
                >
                  Start a Project
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
