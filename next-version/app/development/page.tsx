import Header from "@/components/Header";
import styles from "../../sass/index.module.scss";
import Hero from "@/components/Hero";
import PortfolioItem from "@/components/PortfolioItem";
import QualificationItem from "@/components/QualificationItem";
import Footer from "@/components/Footer";

const portfolioItems = [
  {
    image: "/img/climatecheck/climateCheck.png",
    image2: "",
    title: "ClimateCheck - Climate Reports",
    description:
      "ClimateCheck brings the realities of climate change to your doorstep with a proprietary rating️ and report for any US property. The report details areas such as flood risk, fire risk, and storm risk.",
    dateComplete: "",
    badges: ["React", "TypeScript", "Next.js"],
    link: "https://climatecheck.com",
  },
  {
    image: "/img/commonplace/mainSmall.jpg",
    image2: "",
    title: "CommonPlace - Get Free Feedback",
    description:
      "CommonPlace is a social community where people exchange feedback on each others hobbies and interests such as painting, photography, or craft-making. Join for free!",
    dateComplete: "",
    badges: ["React", "TypeScript", "Next.js", "GraphQL", "Prisma"],
    link: "https://commonplace.social",
  },
  {
    image: "/img/homscout/iphonePreview.png",
    image2: "",
    title: "LeadScout - Mobile Lead Generation",
    description:
      "LeadScout was a React Native mobile app designed for canvassers to identify, pin, and market to a chosen address when scouting potential homes for roof repairs.",
    dateComplete: "",
    badges: ["React Native", "JavaScript", "Node"],
    link: "https://www.leadscoutapp.com",
  },
  {
    image: "/img/assets/group.png",
    image2: "",
    title: "Assets - Proofing and Collaboration",
    description:
      "Assets was intended for designers and photographers to upload their work and get feedback from clients. For iOS, Apple TV, and Web, all apps built with React and React Native.",
    dateComplete: "",
    badges: ["React", "React Native", "JavaScript", "Node"],
    link: "https://github.com/alexthegoodman/AssetsIOS",
  },
];

const qualificationItems = [
  {
    title: "Technology",
    items: [
      {
        keyword: "Semantic Markup",
        copy: "HTML, JSX, SEO, Accessibility",
      },
      {
        keyword: "Scalable Styling",
        copy: "SASS architecture, UI kits, helpers, functions, and variables",
      },
      {
        keyword: "Client-Side Development",
        copy: "React, React Native, Next.js, Apollo, Webpack, Storybook, TypeScript",
      },
      {
        keyword: "Server-Side Development",
        copy: "Node, Express, GraphQL, Nexus, Prisma, Migrations, TypeScript",
      },
      {
        keyword: "Other",
        copy: "Variable Fonts, CSS Grid, Animations, SVGs, SSR, Yarn, etc",
      },
    ],
  },
  {
    title: "Process",
    items: [
      {
        keyword: "Developer Experience",
        copy: "Guidelines, Specs, Checklists, Gitflow, CI / CD, Automated Testing",
      },
      {
        keyword: "Optimization Areas",
        copy: "Security controls, Performance diagnostics, Scalable architectures",
      },
      {
        keyword: "Development Tools",
        copy: "VS Code, WebStorm, Terminal, Sequel Pro, Homebrew, XCode",
      },
      {
        keyword: "Collaboration Tools",
        copy: "Atlassian, Github, Asana, Trello, InVision, Slack, etc",
      },
      {
        keyword: "Design Tools",
        copy: "Figma, Framer, Sketch, Photoshop, Illustrator",
      },
    ],
  },
];

export default function Development() {
  return (
    <section className={styles.outerContainer}>
      <Header />
      <Hero />
      <section className={styles.portfolio}>
        <div className={styles.contain}>
          <div className={styles.grid}>
            {portfolioItems.map((item: any, i: number) => {
              return <PortfolioItem key={i} item={item} />;
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
