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
      <h1>Multiversity</h1> <a href="https://github.com/alexthegoodman/multiversity" target="_blank">View on GitHub</a>
      <p>Learn absolutely anything by leveraging AI to generate courses for you!</p>
    </section>
  );
}
