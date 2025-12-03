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
      <h1>Assets</h1> <a href="https://github.com/alexthegoodman/AssetsIOS" target="_blank">View on GitHub</a>
      <p>Assets nebaled photogrphers, brand designers, and UX designers to collaborate with their clients and rank proofs, even on the Apple TV.</p>
    </section>
  );
}
