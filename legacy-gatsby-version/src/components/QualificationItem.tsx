import * as React from 'react';
import * as styles from '../sass/qualificationItem.module.scss';

const QualificationItem: React.FC<any> = ({ item }) => {
  return (
    <section className={styles.qualificationItem}>
      <div className={styles.itemContain}>
        <h3>{item.title}</h3>
        <ul>
          {item.items.map((listItem: any, i: number) => {
            return (
              <li key={i}>
                <strong>{listItem.keyword}</strong>
                <span>{listItem.copy}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default QualificationItem;
