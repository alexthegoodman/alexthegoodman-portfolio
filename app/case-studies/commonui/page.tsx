import styles from "./page.module.scss";

export default async function MicroblogItem() {
  return (
    <section className={styles.itemContent}>
      <h1>CommonUI - Multithreaded GUI Framework in Rust</h1>
      <a href="https://github.com/alexthegoodman/commonui" target="_blank">View Project on Github</a>
      <p>Perhaps you&apos;re like me and have used all kinds of GUI frameworks and libraries. You understand what makes them shine
        from an ergonomics and developer experience point of view, but also have gained knowledge regarding features and performance concerns relevant to UI.
      </p>
      <p>One of my favorite</p>
    </section>
  );
}