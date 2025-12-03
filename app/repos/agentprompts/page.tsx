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
      <h1>AgentPrompts</h1> <a href="https://github.com/alexthegoodman/agentprompts" target="_blank">View on GitHub</a>
      <p>The world was wondering, what on earth do agents actually do? So I compiled a comprehensive list of real-world tasks which most agents still fail to achieve (as of 2025)!</p>
    </section>
  );
}
