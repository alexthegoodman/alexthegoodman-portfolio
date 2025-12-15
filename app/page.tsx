"use client";

import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeHero from "@/components/new/HomeHero";
import PortfolioItem from "@/components/new/PortfolioItem";
import TestimonialShowcase from "@/components/new/Testimonials";

export default function Home() {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Header />

      <HomeHero />

      <section className="welcome">
        <div>
          <p>
            I&apos;m Alex - a Grand Rapids-based graphics engineer focused on
            real-time 3D, encode/decode/altering video, machine learning, and creative coding. My work bridges
            design and engineering to produce cinematic, interactive visuals and
            powerful generative, predictive, and analytical ML models. <strong>Currently, I am looking for my next long-term position. Feel free to <a href="mailto:alexthegoodman@gmail.com" target="_blank">reach out</a></strong>
          </p>
          <p>
            As an interactive 3D / Video / ML developer in Grand Rapids, I help
            startups, studios, and brands transform ideas into visually rich
            digital experiences and solutions. I specialize in WebGL, WebGPU,
            and Burn + PyTorch to bring your dream ideas to life. I also love
            other graphical frameworks such as Vulkan and often code in Rust,
            C++, and TypeScript.
          </p>
        </div>
      </section>

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
        imageSrc="/img/entropy/screen1.png"
        title="Entropy"
        tagline="Enjoy Making Games"
        description={`Entropy is a powerful yet lightweight game engine that is intended to provide higher-quality visuals while
          still targeting a mobile or web performance goal. It features several advanced capabilities as defaults that set it apart from even
          some popular engines.`}
        points={[
          [
            `Deferred Rendering / Lighting`,
            `This approach not only allows for many lights in a scene,
            but enables complex lighting shaders that can apply more advanced effects.`,
          ],
          [
            `Procedural, Interactive Grass`,
            `Leveraging instancing to create a hair-particle system which tracks player position
            and creates wind and interaction, while remaining performant even with over 50k blades`,
          ],
          [
            `Open-World Landscapes`,
            `The quadtree terrain system enables massive open world landscapes of practically any size`,
          ],
          [
            `Physically-Based-Rendering Techniques`,
            `Leveraging PBR materials and the deferred rendering pipeline, the various specular constraints from metallic to roughness are accounted for`,
          ],
        ]}
        githubLink="https://github.com/alexthegoodman/entropy-engine"
      />

      <PortfolioItem
        side="left"
        imageSrc="/img/ultravox/screen1.jpg"
        title="Ultravox"
        tagline="Open-World Voxel Engine"
        description={`Ultravox is a native C++ / Vulkan engine for open-world voxel-based games. Easy manipulation of point lights and terrain as well early gameplay mechanics.`}
        points={[
          [
            `Open-world optimizations`,
            `Leveraging a chunk manager for vertex data and an octree for physics instances`,
          ],
          [
            `Specialized 3D engine`,
            `Built on Vulkan with only voxels in mind to afford more optimization potential`,
          ],
          [
            `Terrain generation`,
            `Leverage noise algorithms to produce interesting landscapes with voxels`,
          ],
          [
            `Work-in-Progress`,
            `An actively developed engine with an early feature-set`,
          ],
        ]}
        githubLink="https://github.com/alexthegoodman/ultravox"
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

      <PortfolioItem
        side="left"
        imageSrc="/img/ml/loss.png"
        title="CommonMotion 2D"
        tagline="Generate 2D Animation Motion Paths"
        description={`CommonMotion 2D, trained on an in-house dataset of motion paths, generates animations with solid enter / exit motions, but a stronger data regimen is needed for more complex animations.`}
        points={[
          [
            `Hyper-Efficient VAE-LSTM Architecture`,
            `Runs on CPU with minimal RAM overhead`,
          ],
          [
            `Data Adherence via Attention Mechanism`,
            `Ensures generated motions understand training data`,
          ],
          [
            `Easily Integrated or Deployed`,
            `Binary model package for easy loading into apps or APIs`,
          ],
        ]}
        githubLink="https://github.com/alexthegoodman/common-motion-2d-reg/tree/attention/src"
      />

      <PortfolioItem
        side="right"
        imageSrc="/img/ov/poems.png"
        title="Our Virtue"
        tagline="A Book of Poems filled with Godly Teachings"
        description={`A modern collection of 60 devotional poems across 11 categories, bridging traditional Christian teaching with contemporary social concerns.`}
        points={[
          [
            `Contemporary Christian Poetry`,
            `A fresh take on devotional literature`,
          ],
          [
            `Localized Content`,
            `Available in 10 languages to reach a global audience`,
          ],
          [
            `Thematic Organization`,
            `11 categories addressing various aspects of faith and life`,
          ],
        ]}
        githubLink="https://github.com/alexthegoodman/our-virtue-next"
      />

      <section className="welcome">
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
      </section>

      <TestimonialShowcase />

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What types of projects do you specialize in?</h3>
          <p>
            I specialize in a wide range of projects, including real-time 3D graphics, creative coding, machine learning model development, and full-stack web applications. I have experience with everything from motion graphics editors and voxel game engines to LLM-powered applications and PCB design.
          </p>
        </div>
        <div className="faq-item">
          <h3>What is &quot;graphics engineering&quot; and how can it help my business?</h3>
          <p>
            Graphics engineering is the art of using code to create compelling, interactive visuals. For your business, this could mean creating a cinematic product demo, a real-time 3D configurator for your products, or eye-catching data visualizations. I use modern technologies like WebGL, WebGPU, and Vulkan to bring these experiences to life.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can you build custom machine learning models?</h3>
          <p>
            Yes. I have experience building and training custom ML models, including generative models for animations and images. Whether you need a predictive or analytical model, I can leverage frameworks like PyTorch and Burn to create a solution tailored to your data and business needs.
          </p>
        </div>
        <div className="faq-item">
          <h3>Do you work with startups as well as established companies?</h3>
          <p>
            Absolutely. I enjoy working with clients of all sizes. I can help startups build their first product and established companies innovate with new technologies. My process is flexible and can adapt to the needs of your project, whether it&apos;s rapid prototyping or building a scalable, long-term solution.
          </p>
        </div>
        <div className="faq-item">
          <h3>What is your development process like?</h3>
          <p>
            My process is collaborative and iterative. We start by defining the project goals and requirements. Then, I move into design and development, with regular check-ins to ensure the project is on track. I believe in writing clean, maintainable code and using tools like Git for version control and automated testing to ensure quality.
          </p>
        </div>
        <div className="faq-item">
          <h3>Are you available for freelance or contract work?</h3>
          <p>
            Yes, I am currently available for new freelance and contract opportunities. If you have a project you&apos;d like to discuss, please feel free to <a href="mailto:alexthegoodman@gmail.com">reach out</a>.
          </p>
        </div>
        <div className="faq-item">
          <h3>How does the pricing calculator work?</h3>
          <p>
            The pricing calculator is a tool to help you get a rough estimate for your project. You select a project category, a service, and any relevant add-ons. The calculator then provides a price range based on my past projects. Please note that this is an estimate, and the final price may vary depending on the specific details of your project.
          </p>
        </div>
        <div className="faq-item">
          <h3>I have a project that involves both hardware (PCB) and software. Can you handle that?</h3>
          <p>
            Yes, this is an area I&apos;m particularly excited about. My experience in both software development and PCB design allows me to take on projects that bridge the physical and digital worlds. Whether it&apos;s a custom controller for an interactive installation or a smart device, I can design the hardware and write the software to make it work.
          </p>
        </div>
      </section>

      <AboutMe />

      <Footer />
    </div>
  );
}
