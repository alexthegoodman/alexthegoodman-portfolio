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
      <h1>Mega Search</h1> <a href="https://github.com/alexthegoodman/mega-search" target="_blank">View on GitHub</a>
      <p>Ever wanted to build a personal search engine? Perhaps you want to reach out to target prospects? Mega Search is your solution.</p>
    </section>
  );
}
