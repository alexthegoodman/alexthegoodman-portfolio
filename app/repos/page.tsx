import Link from "next/link";

import styles from "./page.module.scss";

const repos = [
  {
    slug: "admesh",
    title: "AdMesh"
  },
  {
    slug: "agentprompts",
    title: "AgentPrompts"
  },
  {
    slug: "assets",
    title: "Assets"
  },
  {
    slug: "codecapture",
    title: "CodeCapture"
  },
  {
    slug: "common-ad-network",
    title: "Common Ad Network"
  },
  {
    slug: "common-floem",
    title: "Common Floem"
  },
  {
    slug: "common-motion-2d-reg",
    title: "Common Motion 2D"
  },
  {
    slug: "common-rte",
    title: "Common RTE"
  },
  {
    slug: "commonplace",
    title: "CommonPlace"
  },
  {
    slug: "commonsimulator",
    title: "CommonSimulator"
  },
  {
    slug: "commontv",
    title: "CommonTV"
  },
  {
    slug: "deeptype",
    title: "DeepType"
  },
  {
    slug: "entropy-engine",
    title: "Entropy Engine"
  },
  {
    slug: "mega-search",
    title: "Mega Search"
  },
  {
    slug: "mini-pic",
    title: "Mini-Pic"
  },
  {
    slug: "multiversity",
    title: "Multiversity"
  },
  {
    slug: "our-virtue-next",
    title: "Our Virtue"
  },
  {
    slug: "qa-kit",
    title: "QA Kit"
  },
  {
    slug: "shaderui",
    title: "ShaderUI"
  },
  {
    slug: "stunts-electron",
    title: "Stunts"
  },
  {
    slug: "ultravox",
    title: "Ultravox"
  },
  {
    slug: "universe",
    title: "Universe"
  },
];

export default function Microblog() {
  return (
    <>
      <section className={styles.blog}>
        <h1>Welcome to my curated project directory from over the years!</h1>
        <div className={styles.blogGrid}>
         {repos.map((item) => {
          return <Link href={`/repos/${item.slug}`}>{item.title}</Link>
         })}
        </div>
      </section>
    </>
  );
}
