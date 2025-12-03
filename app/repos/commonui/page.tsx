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
      <h1>CommonUI</h1> <a href="https://github.com/alexthegoodman/commonui" target="_blank">View on GitHub</a>
      <p>CommonUI is a multi-threaded, custom GUI kit built in Rust!</p>
    </section>
  );
}
