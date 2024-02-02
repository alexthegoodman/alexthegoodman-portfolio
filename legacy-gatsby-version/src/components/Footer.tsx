import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import * as styles from "../sass/footer.module.scss";

const Footer: React.FC<any> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <div className={styles.left}>
          <div className={styles.resumeInfo}>
            <h5>Looking for a resume?</h5>
            <a
              className={styles.btn}
              href="/alex-goodman-resume-2023-a.pdf"
              download={true}
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.contactInfo}>
            <h6>Hoping to get started?</h6>
            <a href="tel:6264913348">
              <FontAwesomeIcon icon={faPhone} /> 626-491-3348
            </a>
            <a href="mailto:alexthegoodman@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> alexthegoodman@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={styles.finePrint}>
        <div className={styles.contain}>
          <div className={styles.left}>
            <span>&copy; {currentYear} - AlexTheGoodman</span>
          </div>
          <div className={styles.right}>
            <a href="https://www.facebook.com/alexthegoodman" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/alexthegoodman" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexthegoodman/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
