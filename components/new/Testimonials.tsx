"use client";

import React, { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  QuotesIcon,
} from "@phosphor-icons/react";

import styles from "../../sass/new/testimonials.module.scss";

const TestimonialShowcase = ({ note = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Alex did a fantastic job picking up the auth flow work on our React prototype and really took it to the next level. I had built the initial foundation, and he jumped in quickly, understood the structure, and added a lot of polish and functionality. He was easy to work with and was straightforward when explaining his thoughts. He also suggested transitioning from Firebase to a more suitable cloud platform for handling records and user accounts, which turned out to be a great call. His input there helped set us up for better scalability down the line. Super communicative, reliable, and clearly knows his stuff—would absolutely work with Alex again.",
      highlight: "Technical Leadership & Strategic Thinking",
    },
    {
      text: "Excellent worker. Alex was extraordinarily flexible and went above and beyond the different asks put on him.",
      highlight: "Flexibility & Excellence",
    },
    {
      text: "Alex was fantastic. Would work with him again and recommend him to anyone.",
      highlight: "Strong Recommendation",
    },
    {
      text: "Alex does great work and is very communicative.",
      highlight: "Quality & Communication",
    },
    {
      text: "Great human!",
      highlight: "Character",
    },
    {
      text: "Alex is a great guy to work with in the sense that we never had any issues we typically see with freelancers. Great solid work ethic, flexible to the needs of a startup and curious about the business. We'll hire Alex again and you should too.",
      highlight: "Professionalism & Reliability",
    },
    {
      text: "Alex is a good developer and is able to deliver quality work on-time and on budget.",
      highlight: "Dependability",
    },
  ];

  const summary = {
    communication:
      "Clear communication, reliable, and easy to collaborate with throughout projects",
    strategic:
      "Contributes valuable architectural suggestions that improve long-term scalability",
    professional:
      "Flexible, solid work ethic, and genuine curiosity about business context",
    trust:
      "Consistently recommended for future work",
  };

  return (
    <div className={styles.testimonialShowcase}>
      <div className={styles.container}>
        {/* Summary Section */}
        <div className={styles.summarySection}>
          <h2>Key Strengths</h2>
          <div className={styles.summaryGrid}>
            {Object.entries(summary).map(([key, value], idx) => (
              <div key={idx} className={styles.summaryCard}>
                <h3 className="text-xs uppercase tracking-widest mb-3 font-semibold">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <p className="text-sm leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className={styles.testimonialSection}>
          <h2 className="text-2xl font-light mb-8 border-b border-gray-300 pb-3">
            Client Testimonials
          </h2>

          {note && <p style={{fontSize: "20px", marginBottom: "25px", fontStyle: "italic"}}>These testimonials were earned as a contract web developer.</p>}

          <div className={styles.testimonialCarouselContainer}>
            {testimonials.map((t) => (
              <section key={t.highlight} className={styles.testimonialCard}>
                <div className={styles.testimonialCarousel}>
                  <div className={styles.quoteIcon}>
                    <QuotesIcon style={{ color: "#666666ff" }} />
                  </div>

                  <div className={styles.testimonialContent}>
                    <p className={styles.testimonialText}>
                      {t.text.substring(0, 60)}
                      {t.text.length >= 60 ? "..." : ""}
                    </p>
                    <div className={styles.testimonialHighlight}>
                      <p className="text-xs uppercase tracking-widest font-semibold">
                        {t.highlight}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.testimonialCarouselHover}>
                  <div className={styles.quoteIcon}>
                    <QuotesIcon style={{ color: "#666666ff" }} />
                  </div>

                  <div className={styles.testimonialContent}>
                    <p className={styles.testimonialTextHover}>{t.text}</p>
                    <div className={styles.testimonialHighlight}>
                      <p className="text-xs uppercase tracking-widest font-semibold">
                        {t.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialShowcase;
