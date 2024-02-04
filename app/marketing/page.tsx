"use client";

import PortfolioItem from "@/components/PortfolioItem";
import styles from "../../sass/index.module.scss";
import QualificationItem from "@/components/QualificationItem";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

const portfolioItems = [
  {
    image: "/img/ads/commonos-ad1.jpeg",
    image2: "",
    title: "CommonOS",
    description:
      "Like most successful ad campaigns, CommonOS requires attractive, high-value ads paired with very fast, effective landing pages.",
    dateComplete: "",
    badges: ["Ads"],
    link: "https://commonos.cloud",
  },
  {
    image: "/img/ads/ourvirtue-ad1.png",
    image2: "",
    title: "Our Virtue",
    description:
      "Involving both ads and social, Our Virtue is focused on building awareness and community while driving thousands of app installs.",
    dateComplete: "",
    badges: ["Ads", "Social"],
    link: "",
  },
  {
    image: "/img/ads/commonplace-ad1.jpeg",
    image2: "",
    title: "CommonPlace",
    description:
      "By targeting users by region and interest, CommonPlace achieved sustainable user growth and engagement.",
    dateComplete: "",
    badges: ["Ads", "Social"],
    link: "",
  },
  {
    image: "",
    image2: "",
    title: "",
    description: "Your ad, page, or blog next?",
    dateComplete: "",
    badges: [""],
    link: "",
  },
];

const qualificationItems = [
  {
    title: "Tooling",
    items: [
      {
        keyword: "Platforms",
        copy: "Facebook, Instagram, Twitter, Google, Email",
      },

      {
        keyword: "Content",
        copy: "Canva, Adobe Creative Suite, Jasper, MailChimp",
      },
      {
        keyword: "Conversion",
        copy: "Landing Pages, A/B Testing",
      },
    ],
  },
  {
    title: "Growth",
    items: [
      {
        keyword: "Optimization",
        copy: "Translation, Targeting, Scheduling, Budgeting",
      },
      {
        keyword: "Analysis",
        copy: "Dashboards, Reports",
      },
      {
        keyword: "",
        copy: "",
      },
    ],
  },
];

export default function Marketing() {
  return (
    <section className={styles.outerContainer}>
      <Header />
      <Hero
        info={
          <>
            <h1>
              Hey! I&apos;m <br /> Alex Goodman
              <em>Digital Marketer</em>
            </h1>
            <p>
              I&apos;m an experienced and knowledgeable digital marketer with a
              strong background in ad management, content creation, and
              conversion optimization.
            </p>
            <p>
              Serving clients is about rapid iteration, fast delivery, and a
              client-first service approach, while remaining mindful of key
              quality areas such as design, originality, and brand voice.
            </p>
          </>
        }
        media={
          <>
            <img
              className={styles.heroImage}
              src="/img/ads/ourvirtue-ad2.png"
            />
          </>
        }
      />
      <section className={styles.portfolio}>
        <div className={styles.contain}>
          <div className={styles.grid}>
            {portfolioItems.map((item: any, i: number) => {
              return <PortfolioItem key={i} item={item} square={true} />;
            })}
          </div>
        </div>
      </section>
      <section className={styles.qualifications}>
        <div className={styles.contain}>
          <div className={styles.grid}>
            {qualificationItems.map((item: any, i: number) => {
              return <QualificationItem key={i} item={item} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
