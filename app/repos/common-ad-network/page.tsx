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
      <h1>Common Ad Network</h1> <a href="https://github.com/alexthegoodman/common-ad-network" target="_blank">View on GitHub</a>
      <p>With the ad network, indie makers can promote each others products on each others sites!</p>
    </section>
  );
}
