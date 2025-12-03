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
      <h1>Common RTE</h1> <a href="https://github.com/alexthegoodman/common-rte" target="_blank">View on GitHub</a>
      <p>This library features rapid typing on massive multi-page documents! (much better than single-page editors which are the standard on the web)</p>
    </section>
  );
}
