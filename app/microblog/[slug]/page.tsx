import { useRouter } from "next/navigation";
import { microblogs } from "../data";

import styles from "./page.module.scss";

export default async function MicroblogItem({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const matchingItem = microblogs.find((blog) => blog.slug === slug);

  if (!matchingItem) {
    return <h1>404</h1>;
  }

  return (
    <section className={styles.itemContent}>
      <h1>{matchingItem.title}</h1>
      <p>{matchingItem.content}</p>
    </section>
  );
}
