import Head from "next/head";
import { useEffect } from "react";
import TestimonialShowcase from "./new/Testimonials";

const AIFirstLandingPage = () => {

    useEffect(() => {
        // Nav scroll
  const nav = document.getElementById('main-nav') as any;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  
    }, []);

    // FAQ
  function toggleFaq(item: any) {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // Pricing toggle
  let pricingMode = 'subscription';
  function togglePricing() {
    setPricing(pricingMode === 'subscription' ? 'project' : 'subscription');
  }
  function setPricing(mode: any) {
    pricingMode = mode;
    const toggle = document.getElementById('pricing-toggle') as any;
    const subLabel = document.getElementById('toggle-sub') as any;
    const projLabel = document.getElementById('toggle-proj') as any;
    const subPanel = document.getElementById('panel-subscription') as any;
    const projPanel = document.getElementById('panel-project') as any;
    if (mode === 'project') {
      toggle.classList.add('project');
      subLabel.classList.remove('active');
      projLabel.classList.add('active');
      subPanel.classList.remove('active');
      projPanel.classList.add('active');
    } else {
      toggle.classList.remove('project');
      subLabel.classList.add('active');
      projLabel.classList.remove('active');
      subPanel.classList.add('active');
      projPanel.classList.remove('active');
    }
  }

  // Form submit
  const handleSubmit = (e: any) => {
      e.preventDefault();
    
      const form = e.currentTarget;
      const firstName = (form.querySelector('input[placeholder="Alex"]') as HTMLInputElement).value;
      const lastName = (form.querySelector('input[placeholder="Morgan"]') as HTMLInputElement).value;
      const email = (form.querySelector('input[type="email"]') as HTMLInputElement).value;
      const service = (form.querySelector('select') as HTMLSelectElement).value;
      const message = (form.querySelector('textarea') as HTMLTextAreaElement).value;

      const subject = encodeURIComponent(`New Inquiry from ${firstName} ${lastName}${service ? ` — ${service}` : ''}`);
      const body = encodeURIComponent(
        `Name: ${firstName} ${lastName}\nEmail: ${email}\nService: ${service || 'Not specified'}\n\nProject Details:\n${message}`
      );

      // none of these work... send to OV database?
        //   window.location.href = `mailto:alexthegoodman@gmail.com?subject=${subject}&body=${body}`;
        // window.open(`mailto:alexthegoodman@gmail.com?subject=${subject}&body=${body}`, '_blank'); // new tab
        // window.open(`mailto:alexthegoodman@gmail.com?subject=${subject}`);

        // const a = document.createElement('a');
        // // a.target = "_blank";
        // // a.style = "display:none;";
        // a.href = `mailto:alexthegoodman@gmail.com?subject=${subject}&body=${body}`;
        // a.click();

      const btn = e.target.querySelector('.form-submit');
        btn.textContent = 'Message Sent ✓';
        btn.style.background = '#2a3a2a';
        btn.style.color = '#7acc7a';
        btn.disabled = true;
    }

    return (
        <>
<Head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet" />

</Head>


{/** NAV **/}
<nav id="main-nav">
  {/* <a href="#" className="nav-logo">Alex<span>The</span>Goodman</a> */}
  <img src={"/img/logo_w.svg"} className="nav-logo" alt="Alex Goodman" title="Alex Goodman" />
  <ul className="nav-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#projects">Work</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
  <a href="#contact" className="nav-cta">Start a Project</a>
</nav>

{/** HERO **/}
<section className="hero" id="home">
  <div className="hero-bg-grid"></div>
  <div className="hero-orb"></div>
  <div className="hero-tag">AI-First Creative Agency · Grand Rapids, MI</div>
  <h1 className="hero-title">
    When <em>AI speed</em><br />meets knowhow
  </h1>
  <p className="hero-sub">
    We blend generative AI, high-performance code, and design sensibility to create marketing experiences that move at the speed of your ambition.
  </p>
  <div className="hero-actions">
    <a href="#contact" className="btn-primary">Begin Your Project</a>
    <a href="#projects" className="btn-ghost">See the Work</a>
  </div>
  <div className="hero-scroll">
    <span>Scroll</span>
    <div className="scroll-line"></div>
  </div>
</section>

{/** MARQUEE **/}
<div className="marquee-wrap">
  <div className="marquee-track">
    <div className="marquee-item">WebGPU & WebGL</div>
    <div className="marquee-item">AI-Powered Campaigns</div>
    <div className="marquee-item">Motion Graphics</div>
    <div className="marquee-item">Real-Time 3D</div>
    <div className="marquee-item">Social & Ads</div>
    <div className="marquee-item">Conversion Optimization</div>
    <div className="marquee-item">ML Models</div>
    <div className="marquee-item">Brand Animation</div>
    <div className="marquee-item">Landing Pages</div>
    <div className="marquee-item">Video Production</div>
    {/** duplicate for seamless loop **/}
    <div className="marquee-item">WebGPU & WebGL</div>
    <div className="marquee-item">AI-Powered Campaigns</div>
    <div className="marquee-item">Motion Graphics</div>
    <div className="marquee-item">Real-Time 3D</div>
    <div className="marquee-item">Social & Ads</div>
    <div className="marquee-item">Conversion Optimization</div>
    <div className="marquee-item">ML Models</div>
    <div className="marquee-item">Brand Animation</div>
    <div className="marquee-item">Landing Pages</div>
    <div className="marquee-item">Video Production</div>
  </div>
</div>

{/** SERVICES **/}
<section id="services">
  <div className="section-inner">
    <div className="section-label">What We Do</div>
    <h2 className="section-title">Services built for<br /><em>the AI era</em></h2>
    <p className="section-body">Every engagement combines creative vision with machine intelligence — the result is faster iteration, sharper messaging, and visuals that make people stop scrolling.</p>
    <div className="services-grid reveal">
      <div className="service-card">
        <div className="service-num">01</div>
        <span className="service-icon">⬡</span>
        <div className="service-name">Creative <em>Ads</em></div>
        <p className="service-desc">AI-assisted ad creation across Facebook, Instagram, Google, and beyond. From copy to creative, we move fast without sacrificing brand voice or visual quality.</p>
        <div className="service-tags">
          <span className="tag">Meta Ads</span>
          <span className="tag">Google</span>
          <span className="tag">A/B Testing</span>
          <span className="tag">Copy</span>
        </div>
      </div>
      <div className="service-card">
        <div className="service-num">02</div>
        <span className="service-icon">◈</span>
        <div className="service-name">Motion <em>Graphics</em></div>
        <p className="service-desc">Cinematic product demos, social reels, and brand animations built on a custom WebGPU engine. The kind of visuals that used to cost 10x more and take 10x longer.</p>
        <div className="service-tags">
          <span className="tag">WebGPU</span>
          <span className="tag">3D</span>
          <span className="tag">Video</span>
          <span className="tag">Reels</span>
        </div>
      </div>
      <div className="service-card">
        <div className="service-num">03</div>
        <span className="service-icon">◉</span>
        <div className="service-name">Landing <em>Pages</em></div>
        <p className="service-desc">Conversion-optimized landing pages designed to load fast, look stunning, and actually sell. Built from scratch for maximum performance and brand alignment.</p>
        <div className="service-tags">
          <span className="tag">Conversion</span>
          <span className="tag">Design</span>
          <span className="tag">Dev</span>
          <span className="tag">Analytics</span>
        </div>
      </div>
      <div className="service-card">
        <div className="service-num">04</div>
        <span className="service-icon">◧</span>
        <div className="service-name">Social <em>Growth</em></div>
        <p className="service-desc">Content calendars, community engagement, and targeted campaigns that build real audiences. Proven across app launches, brand awareness, and e-commerce.</p>
        <div className="service-tags">
          <span className="tag">Instagram</span>
          <span className="tag">Twitter/X</span>
          <span className="tag">Content</span>
          <span className="tag">Scheduling</span>
        </div>
      </div>
      <div className="service-card">
        <div className="service-num">05</div>
        <span className="service-icon">⬟</span>
        <div className="service-name">AI <em>Strategy</em></div>
        <p className="service-desc">Custom ML models and AI workflows woven into your marketing stack. Predictive analytics, generative content pipelines, and automated reporting that compounds over time.</p>
        <div className="service-tags">
          <span className="tag">ML Models</span>
          <span className="tag">Automation</span>
          <span className="tag">Analytics</span>
          <span className="tag">LLM</span>
        </div>
      </div>
      <div className="service-card">
        <div className="service-num">06</div>
        <span className="service-icon">⬖</span>
        <div className="service-name">Brand <em>Identity</em></div>
        <p className="service-desc">From logo systems to full visual guidelines, every brand asset is crafted with a trained eye for design — and then systematized so you can scale without losing cohesion.</p>
        <div className="service-tags">
          <span className="tag">Logo</span>
          <span className="tag">Guidelines</span>
          <span className="tag">Canva</span>
          <span className="tag">Adobe CC</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/** PROJECTS **/}
<section id="projects">
  <div className="section-inner">
    <div className="projects-header">
      <div>
        <div className="section-label">Featured Work</div>
        <h2 className="section-title">Projects that<br /><em>shipped</em></h2>
      </div>
    </div>
    <div className="projects-grid">

      {/** Featured project **/}
      <div className="project-card featured reveal">
        <div>
          <div className="project-type">
            <span>Motion Graphics</span>
            <span>·</span>
            <span>3D Engine</span>
          </div>
          <h3 className="project-title"><em>Stunts</em> — Motion Editor</h3>
          <p className="project-desc">A WebGPU/WebGL motion graphics editor for high-impact video content. Cinematic product demos, social ads, and brand animations — without a professional studio.</p>
          <ul className="project-bullets">
            <li>Cinematic eased keyframes from mouse input with perspective effects</li>
            <li>Custom 3D engine built on WebGPU/WebGL for powerful mockups</li>
            <li>Generative keyframes that add craft automatically</li>
          </ul>
          <a href="https://github.com/alexthegoodman/stunts-electron" className="project-link">View on GitHub →</a>
        </div>
        <div className="project-visual">
            <img src="/img/stunts/screen1.png" alt="Stunts - Generative Motion Graphics" />
        </div>
      </div>

      <div className="project-card reveal reveal-delay-1">
        <div className="project-type"><span>Ads</span> · <span>Social</span></div>
        <h3 className="project-title"><em>Our Virtue</em> — App Launch</h3>
        <p className="project-desc">Full-funnel campaign driving thousands of app installs. Social community building paired with targeted ad spend across multiple platforms.</p>
        <ul className="project-bullets">
          <li>Thousands of app installs via paid + organic</li>
          <li>Engaged community built across Instagram & Twitter</li>
          <li>Localized ad creative in 10 languages</li>
        </ul>
        <a href="https://our-virtue.com/" className="project-link">Visit Project →</a>
      </div>

      <div className="project-card reveal reveal-delay-2">
        <div className="project-type"><span>Ads</span> · <span>Conversion</span></div>
        <h3 className="project-title"><em>CommonOS</em> — Campaign</h3>
        <p className="project-desc">High-conversion ad campaigns paired with fast landing pages. Attractive creative backed by optimized funnels built to convert cold traffic.</p>
        <ul className="project-bullets">
          <li>Fast, high-converting landing page architecture</li>
          <li>Multi-platform ad creative and copy</li>
          <li>Iterative A/B testing framework</li>
        </ul>
        <a href="https://commonos.cloud/" className="project-link">Visit Project →</a>
      </div>

      <div className="project-card reveal reveal-delay-1">
        <div className="project-type"><span>Game Engine</span> · <span>WebGL</span></div>
        <h3 className="project-title"><em>Entropy</em> — Game Engine</h3>
        <p className="project-desc">Lightweight game engine targeting mobile and web with AAA-level visuals. Deferred rendering, procedural grass, and open-world landscape support.</p>
        <ul className="project-bullets">
          <li>Deferred rendering for complex, multi-light scenes</li>
          <li>50k+ blade grass system with player interaction</li>
          <li>Quadtree terrain for open-world scale</li>
        </ul>
        <a href="https://github.com/alexthegoodman/entropy-engine" className="project-link">View on GitHub →</a>
      </div>

      <div className="project-card reveal reveal-delay-2">
        <div className="project-type"><span>ML</span> · <span>Animation</span></div>
        <h3 className="project-title"><em>CommonMotion 2D</em> — ML Model</h3>
        <p className="project-desc">A VAE-LSTM architecture trained on in-house motion data that generates smooth UI animation paths — running on CPU with minimal RAM overhead.</p>
        <ul className="project-bullets">
          <li>Hyper-efficient VAE-LSTM architecture</li>
          <li>Attention mechanism for data adherence</li>
          <li>Binary package for easy app integration</li>
        </ul>
        <a href="https://github.com/alexthegoodman/common-motion-2d-reg/tree/attention/src" className="project-link">View on GitHub →</a>
      </div>

    </div>
  </div>
</section>

<TestimonialShowcase />

{/** ABOUT **/}
<section id="about">
  <div className="section-inner">
    <div className="section-label">About</div>
    <div className="about-grid">
      <div className="about-photo-wrap reveal">
        {/** Replace the div below with an <img> tag when you have your photo **/}
        <div className="about-photo-placeholder">
          {/* <div className="about-photo-placeholder-icon">◎</div>
          <div className="about-photo-placeholder-text">Your photo here</div> */}
          <img alt="Alex Woodman | AlexTheGoodman | Profile Picture" src="/img/me.jpg" />
        </div>
        <div className="about-frame-accent"></div>
      </div>
      <div className="reveal reveal-delay-2">
        <h2 className="section-title">Hi, I'm <em>Alex</em></h2>
        <div className="gold-divider"></div>
        <div className="about-body">
          <p>I'm a Grand Rapids-based graphics engineer, digital marketer, and ML practitioner. I've spent years building things from scratch — game engines, motion editors, ad campaigns, and ML models — and now I'm bringing that full-stack creative capability to one focused offering.</p>
          <p>AlexTheGoodman exists because most agencies either design well or build well. I do both. My work bridges the gap between engineering and aesthetics, and AI amplifies every part of that process — from generative creative to predictive campaign analytics.</p>
          <p>I work with startups, studios, and brands that want to move fast without compromising on craft. Every project gets the same obsessive attention to detail, whether it's a single ad or a full brand system.</p>
        </div>
        <div className="about-skills">
          <div className="about-skill">WebGPU / WebGL / Vulkan</div>
          <div className="about-skill">Rust · C++ · TypeScript</div>
          <div className="about-skill">PyTorch / ML Modeling</div>
          <div className="about-skill">Meta &amp; Google Ads</div>
          <div className="about-skill">Motion Graphics</div>
          <div className="about-skill">Adobe CC / Canva</div>
          <div className="about-skill">Conversion Optimization</div>
          <div className="about-skill">Brand &amp; Identity</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/** PRICING **/}
<section id="pricing">
  <div className="section-inner">
    <div className="section-label">Investment</div>
    <h2 className="section-title">Honest pricing,<br /><em>clear scope</em></h2>
    <p className="section-body">Choose a retainer for ongoing growth or a project rate for defined deliverables. All engagements include direct access — no account managers, no handoffs.</p>

    <div className="pricing-toggle">
      <span className="toggle-label active" id="toggle-sub" onClick={() => setPricing('subscription')}>Monthly Retainer</span>
      <div className="toggle-switch" id="pricing-toggle" onClick={() => togglePricing()}></div>
      <span className="toggle-label" id="toggle-proj" onClick={() => setPricing('project')}>Project-Based</span>
    </div>

    <div className="pricing-panels">

      {/** SUBSCRIPTION **/}
      <div className="pricing-panel active" id="panel-subscription">
        <div className="pricing-grid reveal">
          <div className="pricing-card">
            <div className="pricing-tier">Starter</div>
            <div className="pricing-price"><span>$</span>200</div>
            <div className="pricing-cadence">/ month · 3-month minimum</div>
            <div className="pricing-name">The <em>Spark</em></div>
            <p className="pricing-desc">Perfect for early-stage brands that need consistent, quality output without a full agency overhead.</p>
            <ul className="pricing-features">
              <li>2 ad creatives / month</li>
              <li>8 social posts / month</li>
              <li>Monthly analytics report</li>
              <li>1 landing page (onboarding)</li>
              <li>Async communication</li>
            </ul>
            <a href="#contact" className="btn-ghost" style={{ display: "block", textAlign: "center", padding: "0.8rem" }}>Get Started</a>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-tier">Growth</div>
            <div className="pricing-price"><span>$</span>500</div>
            <div className="pricing-cadence">/ month · 3-month minimum</div>
            <div className="pricing-name">The <em>Engine</em></div>
            <p className="pricing-desc">For growing brands that want serious output — ads, content, motion, and ongoing optimization working in concert.</p>
            <ul className="pricing-features">
              <li>6 ad creatives / month</li>
              <li>16 social posts / month</li>
              <li>1 motion graphic / month</li>
              <li>Bi-weekly strategy calls</li>
              <li>A/B testing &amp; reporting</li>
              <li>Campaign management included</li>
            </ul>
            <a href="#contact" className="btn-primary" style={{ display: "block", textAlign: "center", padding: "0.8rem" }}>Get Started</a>
          </div>
          <div className="pricing-card">
            <div className="pricing-tier">Scale</div>
            <div className="pricing-price"><span>$</span>800</div>
            <div className="pricing-cadence">/ month · 3-month minimum</div>
            <div className="pricing-name">The <em>Studio</em></div>
            <p className="pricing-desc">Full creative partnership. Custom ML workflows, high-end 3D visuals, and end-to-end campaign ownership.</p>
            <ul className="pricing-features">
              <li>Unlimited ad creative iterations</li>
              <li>Custom motion graphics &amp; video</li>
              <li>3D product visualization</li>
              <li>AI/ML pipeline integration</li>
              <li>Weekly calls + Slack access</li>
              <li>Full campaign management</li>
            </ul>
            <a href="#contact" className="btn-ghost" style={{ display: "block", textAlign: "center", padding: "0.8rem" }}>Get Started</a>
          </div>
        </div>
      </div>

      {/** PROJECT **/}
      <div className="pricing-panel" id="panel-project">
        <div className="pricing-grid reveal">
          <div className="pricing-card">
            <div className="pricing-tier">Creative</div>
            <div className="pricing-price"><span>$</span>300<span>+</span></div>
            <div className="pricing-cadence">one-time · 5-10 day turnaround</div>
            <div className="pricing-name">Ad <em>Package</em></div>
            <p className="pricing-desc">A focused burst of ad creative — copy, visuals, and platform-optimized formats for a single campaign push.</p>
            <ul className="pricing-features">
              <li>3-5 ad variants (static &amp; motion)</li>
              <li>Platform-optimized sizing</li>
              <li>Copy for each variant</li>
              <li>1 revision round</li>
            </ul>
            <a href="#contact" className="btn-ghost" style={{ display: "block", textAlign: "center", padding: "0.8rem" }}>Request Quote</a>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-tier">Build</div>
            <div className="pricing-price"><span>$</span>600<span>+</span></div>
            <div className="pricing-cadence">one-time · 2-3 week delivery</div>
            <div className="pricing-name">Landing <em>Page</em></div>
            <p className="pricing-desc">A conversion-focused landing page built from scratch — stunning design, fast code, analytics-ready from day one.</p>
            <ul className="pricing-features">
              <li>Custom design &amp; development</li>
              <li>Mobile-first, performance-optimized</li>
              <li>Analytics &amp; tracking setup</li>
              <li>2 revision rounds</li>
              <li>30-day post-launch support</li>
            </ul>
            <a href="#contact" className="btn-primary" style={{ display: "block", textAlign: "center", padding: "0.8rem" }}>Request Quote</a>
          </div>
          <div className="pricing-card">
            <div className="pricing-tier">Signature</div>
            <div className="pricing-price"><span>$</span>900<span>+</span></div>
            <div className="pricing-cadence">one-time · 3-5 week delivery</div>
            <div className="pricing-name">Motion <em>Production</em></div>
            <p className="pricing-desc">High-end 3D motion graphics, product visualizations, or brand films. The kind of content that redefines how people perceive your brand.</p>
            <ul className="pricing-features">
              <li>Concept to final render</li>
              <li>Custom 3D engine pipeline</li>
              <li>Multiple format exports</li>
              <li>Commercial usage rights</li>
              <li>2 revision rounds</li>
            </ul>
            <a href="#contact" className="btn-ghost" style={{ display: "block", textAlign: "center", padding: "0.8rem" }}>Request Quote</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/** FAQ **/}
<section id="faq">
  <div className="section-inner">
    <div className="section-label">Questions</div>
    <h2 className="section-title">Common <em>questions</em></h2>
    <div className="faq-grid reveal">
      <div className="faq-item" onClick={(e) => toggleFaq(e.currentTarget)}>
        <div className="faq-question">
          What makes this "AI-first"?
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">AI is woven into every part of the workflow — not as a shortcut, but as a force multiplier. From generative ad creative and copy variants to predictive analytics and custom ML models, the result is faster output, lower cost, and measurably better performance. You still get hand-crafted design and strategy; AI just removes the ceiling on how much we can do.</div>
      </div>
      <div className="faq-item" onClick={(e) => toggleFaq(e.currentTarget)}>
        <div className="faq-question">
          Do you work with early-stage startups?
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">Absolutely. Some of the most interesting work happens at the early stage when brand identity is still forming and every dollar of ad spend has to work hard. The Starter retainer or a project-based engagement is a great fit for pre-Series A teams that want professional creative without a full in-house team.</div>
      </div>
      <div className="faq-item" onClick={(e) => toggleFaq(e.currentTarget)}>
        <div className="faq-question">
          How does communication work?
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">You work directly with me — no account managers or handoffs. Depending on the plan, communication is async (Slack or email), with regular calls scheduled on retainer plans. I'm responsive and believe fast iteration beats perfect planning, so expect quick turnarounds on feedback and approvals.</div>
      </div>
      <div className="faq-item" onClick={(e) => toggleFaq(e.currentTarget)}>
        <div className="faq-question">
          What's your revision policy?
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">Project-based work includes defined revision rounds (1-2 depending on scope). Retainer clients get ongoing iteration baked into the relationship — the model is continuous improvement, not discrete deliverables. If a creative isn't working, we pivot fast.</div>
      </div>
      <div className="faq-item" onClick={(e) => toggleFaq(e.currentTarget)}>
        <div className="faq-question">
          Can you handle ad management and spending?
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">Yes. Growth and Scale retainers include campaign management — setup, targeting, budgeting, and ongoing optimization across Meta, Google, and other platforms. Ad spend budget is separate and billed directly through your account. I provide dashboards and regular reports so you always know exactly where your money is going.</div>
      </div>
      <div className="faq-item" onClick={(e) => toggleFaq(e.currentTarget)}>
        <div className="faq-question">
          Do you offer custom or enterprise scopes?
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">Yes. If none of the listed tiers fit your situation — whether you need a bespoke ML pipeline, a large-scale interactive experience, or an extended multi-month engagement — reach out and describe what you're building. Custom scopes are quoted after a brief discovery call.</div>
      </div>
      <div className="faq-item" onClick={(e) => toggleFaq(e.currentTarget)}>
        <div className="faq-question">
          What industries do you serve?
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">Primarily tech, SaaS, consumer apps, and creative brands. That said, good design and sharp strategy apply everywhere. If you have a product worth marketing, let's talk — I take projects based on fit and interesting scope, not strictly by vertical.</div>
      </div>
      <div className="faq-item" onClick={(e) => toggleFaq(e.currentTarget)}>
        <div className="faq-question">
          What do you need to get started?
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">Fill out the contact form with your project type, timeline, and budget range. For retainer engagements I'll set up a 30-minute discovery call. For project work I can often turn around a scope and quote within 48 hours. The more context you give upfront, the faster we can move.</div>
      </div>
    </div>
  </div>
</section>

{/** CONTACT / SUBSCRIBE **/}
<section id="contact">
  <div className="contact-inner">
    <div className="section-label">Let's Work</div>
    <h2 className="section-title">Ready to build<br />something <em>remarkable?</em></h2>
    <p className="section-body" style={{ margin: "0 auto", textAlign: "center" }}>Tell me about your project. I'll respond within one business day with a clear next step.</p>
    <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input type="text" className="form-input" placeholder="Alex" required />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-input" placeholder="Morgan" required />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input type="email" className="form-input" placeholder="hello@yourcompany.com" required />
      </div>
      <div className="form-group">
        <label className="form-label">What are you looking for?</label>
        <select className="form-select form-input">
          <option value="">Select a service…</option>
          <option>Monthly Retainer — Starter</option>
          <option>Monthly Retainer — Growth</option>
          <option>Monthly Retainer — Scale</option>
          <option>Project — Ad Package</option>
          <option>Project — Landing Page</option>
          <option>Project — Motion Production</option>
          <option>Custom / Not Sure Yet</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Tell me about your project</label>
        <textarea className="form-textarea" placeholder="What are you building? What problem needs solving? Any timeline or budget context helps…"></textarea>
      </div>
      <button type="submit" className="form-submit">Send Message →</button>
      <p className="form-note">No spam, no newsletters unless you ask. Just a direct reply from me.</p>
    </form>
  </div>
</section>

{/** FOOTER **/}
<footer>
  <div className="footer-logo">AlexTheGoodman</div>
  <p className="footer-copy">© 2025 AlexTheGoodman. Grand Rapids, MI.</p>
  <ul className="footer-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#projects">Work</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</footer>


        </>
    )
}

export default AIFirstLandingPage;

