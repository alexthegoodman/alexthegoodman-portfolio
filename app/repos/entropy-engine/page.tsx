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
      <h1>Entropy Engine</h1> <a href="https://github.com/alexthegoodman/entropy-engine" target="_blank">View on GitHub</a>
      <p></p>
    </section>
  );
}
