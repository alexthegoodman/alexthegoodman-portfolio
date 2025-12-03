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
      <h1>Common Floem</h1> <a href="https://github.com/alexthegoodman/common-floem" target="_blank">View on GitHub</a>
      <p>This fork of the popular Rust Floem library enables deep integration of wgpu with the stellar UX of Floem!</p>
    </section>
  );
}
