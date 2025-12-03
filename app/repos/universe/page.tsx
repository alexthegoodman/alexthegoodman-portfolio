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
      <h1>Universe</h1> <a href="https://github.com/alexthegoodman/universe" target="_blank">View on GitHub</a>
      <p>Universe was a fun side project where I created a strategy game filled with autonomous LLM-powered animals!</p>
    </section>
  );
}
