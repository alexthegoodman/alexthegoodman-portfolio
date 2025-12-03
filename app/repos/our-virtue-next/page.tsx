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
      <h1>Our Virtue</h1> <a href="https://github.com/alexthegoodman/our-virtue-next" target="_blank">View on GitHub</a>
      <p>Our Virtue is a book of poems detailing Godly teachings of peace, love, and forgiveness.</p>
    </section>
  );
}
