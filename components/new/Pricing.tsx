"use client";

import { useState } from "react";
import styles from "../../sass/new/pricing.module.scss";

import { Transition } from "react-transition-group";
import { useRef } from "react";
import {
  CheckCircleIcon,
  DesktopIcon,
  PaintBrushHouseholdIcon,
  PaintBucketIcon,
} from "@phosphor-icons/react";

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
              <PaintBrushHouseholdIcon size={24} />
              <div className={styles.info}>
                <h3>1-3 Page Website</h3>
                <p>$300</p>
              </div>
            </div>
            <div className={styles.tier} onClick={() => selectTier(1)}>
              <PaintBucketIcon size={24} />
              <div className={styles.info}>
                <h3>10+ Page Website</h3>
                <p>$1000+</p>
              </div>
            </div>
            <div className={styles.tier} onClick={() => selectTier(2)}>
              <DesktopIcon size={24} />
              <div className={styles.info}>
                <h3>Desktop App or Mobile App</h3>
                <p>$500+</p>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <PricingTierDetails in={selectedTier === 0}>
              <h3>1-3 Page Website - $300</h3>
              <ul>
                <li>
                  <CheckCircleIcon />{" "}
                  <span>Custom design tailored to your brand</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Responsive layout for all devices</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>SEO optimization</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Contact form integration</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Deployment to host</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>
                    Payload CMS Integration (more options at next tier)
                  </span>
                </li>
              </ul>
            </PricingTierDetails>
            <PricingTierDetails in={selectedTier === 1}>
              <h3>10+ Page Website - $1000+</h3>
              <ul>
                <li>
                  <CheckCircleIcon />
                  <span>All features of the 1-3 Page Website</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Advanced SEO strategies</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>WordPress, Craft CMS, or Payload CMS Integration</span>
                </li>
              </ul>
            </PricingTierDetails>
            <PricingTierDetails in={selectedTier === 2}>
              <h3>Desktop App or Mobile App - $500+</h3>
              <ul>
                <li>
                  <CheckCircleIcon />
                  <span>Cross-platform compatibility</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Intuitive user interface design</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Performance optimization</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Backend integration (if needed)</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>App store deployment assistance</span>
                </li>
              </ul>
            </PricingTierDetails>
          </div>
        </div>
      </div>
    </section>
  );
}
