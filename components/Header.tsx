import * as React from "react";
import styles from "../sass/header.module.scss";

const Header: React.FC<any> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contain}>
        <div className={styles.logo}>
          <img src="/img/logo.svg" alt="Alex Goodman" title="Alex Goodman" />
          {/* <h2>
            <span>Alex The</span>
            <span>Goodman</span>
          </h2> */}
        </div>
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
                <a
                  className={styles.btn}
                  href="mailto:alexthegoodman@gmail.com"
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
