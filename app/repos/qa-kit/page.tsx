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
      <h1>QA Kit</h1> <a href="https://github.com/alexthegoodman/qa-kit" target="_blank">View on GitHub</a>
      <p>With QA Kit tied to your coding agent, you can enforce code standards on your agent (beyond typical syntax standards)!</p>
    </section>
  );
}
