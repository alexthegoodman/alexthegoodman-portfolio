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
      <h1>CommonTV</h1> <a href="https://github.com/alexthegoodman/commontv" target="_blank">View on GitHub</a>
      <p>With this Ubuntu GNOME Extension, you can automate your window management to make it ideal for TV viewing!</p>
    </section>
  );
}
