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
      <h1>Mini-Pic</h1> <a href="https://github.com/alexthegoodman/mini-pic" target="_blank">View on GitHub</a>
      <p></p>
    </section>
  );
}
