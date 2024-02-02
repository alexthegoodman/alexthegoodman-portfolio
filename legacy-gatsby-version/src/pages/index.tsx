import { graphql } from "gatsby";
import * as React from "react";
import AdditionalItem from "../components/AdditionalItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navigator from "../components/Navigator";
import PortfolioItem from "../components/PortfolioItem";
import QualificationItem from "../components/QualificationItem";
import * as styles from "../sass/index.module.scss";

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        portfolioItems {
          image
          title
          description
          dateComplete
          badges
          link
        }
        qualificationItems {
          title
          items {
            keyword
            copy
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { portfolioItems, qualificationItems } = data.site.siteMetadata;

  return (
    <section className={styles.outerContainer}>
      <Header />
      <Hero />
      {/* <Navigator /> */}
      <section className={styles.portfolio}>
        <div className={styles.contain}>
          <div className={styles.grid}>
            {portfolioItems.map((item: any, i: number) => {
              return <PortfolioItem key={i} item={item} />;
            })}
            {/* <AdditionalItem /> */}
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
};

export default IndexPage;
