"use client";

import AboutMe from "@/components/AboutMe";
import AboutMeCannabis from "@/components/AboutMeCannabis";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeHero from "@/components/new/HomeHero";
import ImageHero from "@/components/new/ImageHero";
import PortfolioItem from "@/components/new/PortfolioItem";
import TestimonialShowcase from "@/components/new/Testimonials";

export default function Home() {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Header showLinks={false} logoFilter={"hue-rotate(90deg)"} />

      <ImageHero particleColor={[115 / 255, 195 / 255, 100 / 255]} 
        heroInner={<><h1 style={{ background: "rgb(115, 195, 100)" }}>
          Nurturing <span>plant health</span> <br />
          with passion and care
        </h1>
        <h2 style={{ background: "rgb(115, 195, 100)" }}>
          Grand Rapids Home Cultivator
        </h2></>}
      />

      <section className="welcome">
        <div>
          <p>
            I&apos;m Alex - a Grand Rapids-based home grower with experience
            in basic plant training techniques, different fertilization regimens,
            various light sources and conditions, among other things.
          </p>
          <p>
            As a budding designer, I value the health, creative, and recreational benefits
            that cannabis offers to society.
          </p>
        </div>
      </section>

      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px"
      }}>
        <img src="/img/cannabis/grow1.jpg" />
        <img src="/img/cannabis/grow2.jpg" />
        <img src="/img/cannabis/grow3.jpg" />
        <img src="/img/cannabis/grow4.webp" />
        <img src="/img/cannabis/grow5.webp" />
        <img src="/img/cannabis/grow6.webp" />
      </section>

      {/* <section className="welcome">
        <div>
          <p>
            The wide variety of projects I have built include: Rust GUI kit, C++ and Rust game engine, WGPU and WASM motion graphics editor, 
            animation keyframe generation model, 64x64 image generation model, sparse web crawler, various LLM-powered application experiences, and a &quot;multi-page&quot; rich text editor.
          </p>
          <p>
            I also have a foundation of experience in your classic frontend technologies: HTML, CSS, JavaScript (TypeScript) and related frontend frameworks and libraries. I understand how to implement data structures
            and algorithms which take web experiences to the next level.
          </p>
          <p>
            I love taking on complex challenges that involve a deep understanding for the technology at hand. I excel at building things from scratch rather than repurposing existing solutions.
          </p>
        </div>
      </section> */}

      <TestimonialShowcase note={true} />

      {/* <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3></h3>
          <p>
          </p>
        </div>
      </section> */}

      <AboutMeCannabis />

      <Footer />
    </div>
  );
}
