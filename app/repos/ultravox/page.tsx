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
      <h1>Ultravox</h1> <a href="https://github.com/alexthegoodman/ultravox" target="_blank">View on GitHub</a>
      <p>Ultravox is a high-performance C++ game engine leveraging Vulkan!</p>
    </section>
  );
}
