"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeHero from "@/components/new/HomeHero";
import PortfolioItem from "@/components/new/PortfolioItem";

export default function Home() {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Header />

      <HomeHero />

      <PortfolioItem
        side="left"
        imageSrc="/img/stunts/screen1.png"
        title="Stunts"
        tagline="Create Beautiful Videos Easily"
        description={`Stunts is a motion graphics editor built for high-impact video
            content. Create cinematic product demos, social media ads, app
            previews, and brand animations with professional visual flair -
            fast.`}
        points={[
          [
            `Cinematic camera movements`,
            ` Mouse movements
              translate into smooth, eased keyframes with perspective effects
              for that signature scan-like feel`,
          ],
          [
            `Custom 3D engine`,
            `Built on WebGPU and WebGL for
              powerful 3D mockups and animations`,
          ],
          [
            `Generative keyframes`,
            `Intelligent animation
              assistance that adds craft automatically`,
          ],
          [
            `Fast workflow`,
            `Most effects are just a couple
              clicks with intuitive options`,
          ],
        ]}
        githubLink="https://github.com/alexthegoodman/stunts-electron"
      />

      <PortfolioItem
        side="right"
        imageSrc="/img/commonplace/mainSmall.jpg"
        title="CommonPlace"
        tagline="Connect and Share Feedback Rapidly"
        description={`CommonPlace enabled users to share their creations by providing feedback on other creations. The user simply clicks the "impression" which matches their feelings about it.`}
        points={[
          [
            `Impression-based feedback`,
            ` Users select from a set of
            impressions to quickly convey their thoughts`,
          ],
          [
            `Community engagement`,
            `Fostered a sense of community
            through shared feedback and interaction`,
          ],
          [
            `User-friendly interface`,
            `Designed for ease of use,
            allowing users to navigate and provide feedback effortlessly`,
          ],
        ]}
        githubLink="https://github.com/alexthegoodman/commonplace"
      />

      <Footer />
    </div>
  );
}
