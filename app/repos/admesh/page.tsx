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
      <h1>AdMesh</h1> <a href="https://github.com/alexthegoodman/admesh" target="_blank">View on GitHub</a>
      <p>AdMesh was all about enabling creators to make 3D content (such as ads) for the AR revolution.</p>
    </section>
  );
}
