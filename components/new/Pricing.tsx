"use client";

import { useState } from "react";
import styles from "../../sass/new/pricing.module.scss";

import { Transition } from "react-transition-group";
import { useRef } from "react";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: any = {
  entering: {
    opacity: 1,
    transform: "translateY(0)",
  },
  entered: {
    opacity: 1,
    transform: "translateY(0)",
  },
  exiting: {
    opacity: 0,
    transform: "translateY(10px)",
  },
  exited: {
    opacity: 0,
    transform: "translateY(10px)",
  },
};

function PricingTierDetails({
  in: inProp,
  children = null,
}: {
  in: boolean;
  children?: React.ReactNode;
}) {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {(state) => (
        <div
          ref={nodeRef}
          className={styles.tierDetails}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState<number | null>(0);

  function selectTier(tierIndex: number) {
    setSelectedTier(null);

    // give time to animate
    setTimeout(() => {
      setSelectedTier(tierIndex);
    }, 300);
  }

  return (
    <section className={styles.pricing}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Transparent Pricing</h2>
          <p>
            I believe in straightforward and honest pricing. My rates are
            competitive and reflect the quality and dedication I bring to each
            project. Contact me for a personalized quote based on your specific
            needs.
          </p>
        </div>
        <div className={styles.tiers}>
          <div className={styles.browse}>
            <div className={styles.tier} onClick={() => selectTier(0)}>
              <h3>1-3 Page Website</h3>
              <p>$300</p>
            </div>
            <div className={styles.tier} onClick={() => selectTier(1)}>
              <h3>10+ Page Website</h3>
              <p>$1000+</p>
            </div>
            <div className={styles.tier} onClick={() => selectTier(2)}>
              <h3>Desktop App or Mobile App</h3>
              <p>$500+</p>
            </div>
          </div>
          <div className={styles.details}>
            <PricingTierDetails in={selectedTier === 0}>
              <h3>1-3 Page Website - $300</h3>
              <ul>
                <li>Custom design tailored to your brand</li>
                <li>Responsive layout for all devices</li>
                <li>SEO optimization</li>
                <li>Contact form integration</li>
                <li>Deployment to host</li>
                <li>Payload CMS Integration (more options at next tier)</li>
              </ul>
            </PricingTierDetails>
            <PricingTierDetails in={selectedTier === 1}>
              <h3>10+ Page Website - $1000+</h3>
              <ul>
                <li>All features of the 1-3 Page Website</li>
                <li>Advanced SEO strategies</li>
                <li>WordPress, Craft CMS, or Payload CMS Integration</li>
              </ul>
            </PricingTierDetails>
            <PricingTierDetails in={selectedTier === 2}>
              <h3>Desktop App or Mobile App - $500+</h3>
              <ul>
                <li>Cross-platform compatibility</li>
                <li>Intuitive user interface design</li>
                <li>Performance optimization</li>
                <li>Backend integration (if needed)</li>
                <li>App store deployment assistance</li>
              </ul>
            </PricingTierDetails>
          </div>
        </div>
      </div>
    </section>
  );
}
