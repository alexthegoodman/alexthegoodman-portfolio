import { useRouter } from "next/navigation";

import styles from "../page-ind.module.scss"

export default async function RepoItem({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className={styles.itemContent}>
      <h1>CommonSimulator</h1> <a href="https://github.com/alexthegoodman/CommonSimulator" target="_blank">View on GitHub</a>
      <p>With this Kotlin-based simulator, you can fetch stocks, simulate buying them, and watch their performance over time, with local SQLite caching.</p>
    </section>
  );
}
