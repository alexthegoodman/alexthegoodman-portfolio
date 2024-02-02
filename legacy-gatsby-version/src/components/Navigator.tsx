import * as React from 'react';
import * as styles from '../sass/navigator.module.scss';

const Navigator: React.FC<any> = () => {
  return (
    <section className={styles.navigator}>
      <div className={styles.contain}>
        <div className={styles.anchor}>
          <i className="ic" />
          <span>Portfolio</span>
        </div>
        <div className={styles.anchor}>
          <i className="ic" />
          <span>Qualifications</span>
        </div>
        <div className={styles.anchor}>
          <i className="ic" />
          <span>More</span>
        </div>
      </div>
    </section>
  );
};

export default Navigator;
