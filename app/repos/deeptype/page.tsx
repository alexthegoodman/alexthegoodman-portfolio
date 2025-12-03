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
      <h1>DeepType</h1> <a href="https://github.com/alexthegoodman/deeptype" target="_blank">View on GitHub</a>
      <p>DeepType enables writers to write with the power of intelligent results appearing along the way, informing them!</p>
    </section>
  );
}
