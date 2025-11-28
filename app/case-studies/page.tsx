import Link from "next/link";

import styles from "./page.module.scss";

export default function CaseStudies() {
  return (
    <>
      <section className={styles.blog}>
        <h1>Browse my Case Studies!</h1>
        <div className={styles.blogGrid}>
          <div>
            <span><strong>CommonUI</strong></span>
            <Link href="/case-studies/commonui">Read More</Link>
          </div>
        </div>
      </section>
    </>
  );
}
