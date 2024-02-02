import * as React from 'react';
import * as styles from '../sass/additionalItem.module.scss';

const AdditionalItem: React.FC<any> = ({ item }) => {
  return (
    <section className={styles.additionalItem}>
      <div className={styles.itemContain}>
        <h6>Web Sites?</h6>
        <p>
          React may be my bread and butter, but I have also designed and
          developed the following web sites:
        </p>
        <ul>
          <li>
            <a href="https://baumannbuilding.com/" target="_blank">
              Baumann Building
            </a>
          </li>
          <li>
            <a href="http://climateguys.com/" target="_blank">
              ClimateGuys.com
            </a>
          </li>
          <li>
            <a href="http://ammiebouwman.com/" target="_blank">
              Ammie Bouwman
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AdditionalItem;
