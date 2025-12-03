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
      <h1>Common Motion 2D</h1> <a href="https://github.com/alexthegoodman/common-motion-2d-reg" target="_blank">View on GitHub</a>
      <p>This custom machine learning model enables the generation of animation keyframes for use in motion graphics videos!</p>
    </section>
  );
}
