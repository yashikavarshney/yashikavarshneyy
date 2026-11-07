import { PROFILE } from "../data/profile";
import { withBase } from "../lib/urls";

const projectImageSizes = {
  emtdesk: { width: 1400, height: 875 },
  qms: { width: 1126, height: 880 },
  "emt-analytics": { width: 1400, height: 865 },
} as const;

export default function ReadablePortfolio() {
  return (
    <div className="readable-portfolio">
      <header className="rp-header">
        <a
          className="rp-wordmark"
          href={withBase("/")}
          aria-label={`${PROFILE.shortName} — ${PROFILE.name} home`}
        >
          {PROFILE.shortName}
        </a>
        <nav aria-label="Portfolio navigation">
          <a href="#selected-work">Selected work</a>
          <a href="#contact">Contact</a>
          <a className="rp-film-link" href={withBase("/")}>
            Watch the animated portfolio <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <nav className="rp-breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href={withBase("/")}>Home</a>
          </li>
          <li aria-current="page">Portfolio</li>
        </ol>
      </nav>

      <main id="main-content">
        <section className="rp-intro" aria-labelledby="profile-heading">
          <p className="rp-eyebrow">Product Designer × Creative Thinker</p>
          <h1 id="profile-heading">Yashika Varshney — Product Designer</h1>
          <p className="rp-lead">
            I design digital experiences, from enterprise tools and design
            systems to motion and AI-assisted experiments. I am curious about a
            lot more than pixels.
          </p>
          <p>
            My process moves from understanding the real problem through
            exploration, design, iteration, and shipping. Travel, observation,
            and creative experimentation also shape what I make.
          </p>
          <div className="rp-intro-actions">
            <a className="rp-button" href="#selected-work">
              Explore selected work
            </a>
            <a href={`mailto:${PROFILE.email}`}>Let&apos;s work together</a>
          </div>
        </section>

        <section
          id="selected-work"
          className="rp-section"
          aria-labelledby="work-heading"
        >
          <p className="rp-eyebrow">Selected work</p>
          <h2 id="work-heading">Making complex work easier to navigate.</h2>
          <p className="rp-section-intro">
            A closer look at the enterprise products featured in my animated
            portfolio, with the problem, approach, and result together in one
            place.
          </p>
          <div className="rp-projects">
            {PROFILE.projects.map((project, index) => (
              <article className="rp-project" id={project.id} key={project.id}>
                <div className="rp-project-heading">
                  <p className="rp-eyebrow">
                    {String(index + 1).padStart(2, "0")} / {project.category}
                  </p>
                  <h3>{project.title}</h3>
                  <p className="rp-project-description">
                    {project.description}
                  </p>
                </div>
                <img
                  src={withBase(project.image)}
                  alt={project.imageAlt}
                  width={projectImageSizes[project.id].width}
                  height={projectImageSizes[project.id].height}
                  loading="lazy"
                  decoding="async"
                />
                <dl className="rp-project-notes">
                  <div>
                    <dt>The problem</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>The approach</dt>
                    <dd>{project.approach}</dd>
                  </div>
                  <div>
                    <dt>The result</dt>
                    <dd>{project.outcome}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="rp-section" aria-labelledby="exploration-heading">
          <p className="rp-eyebrow">Beyond the brief</p>
          <h2 id="exploration-heading">Motion, experiments, and new ideas.</h2>
          <div className="rp-exploration">
            <article>
              <h3>Motion with Lottie</h3>
              <p>
                I make micro-interactions and loaders for product interfaces. I
                am a Lottie Certified Creator and a Lottie Squad Creator, and
                have completed LottieFiles courses for Figma and Framer.
              </p>
            </article>
            <article>
              <h3>AI-assisted design</h3>
              <p>
                I explore AI as part of the design process through rapid
                prototyping, visual exploration, motion, and creative
                experimentation. I also share what I learn on LinkedIn.
              </p>
            </article>
          </div>
          <ul className="rp-skills" aria-label="Areas of work">
            {PROFILE.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="rp-section" aria-labelledby="questions-heading">
          <p className="rp-eyebrow">A few quick answers</p>
          <h2 id="questions-heading">About my work.</h2>
          <div className="rp-questions">
            <article>
              <h3>What kind of design work does Yashika do?</h3>
              <p>
                Yashika works on product design, enterprise UX, and design
                systems, and explores motion and AI-assisted design. Her
                portfolio includes EMTDesk, QMS, and EMT Analytics.
              </p>
            </article>
            <article>
              <h3>Can I read the portfolio without playing the film?</h3>
              <p>
                Yes. This page brings together the selected project summaries,
                areas of work, and contact details. You can also{" "}
                <a href={withBase("/")}>watch the animated portfolio</a>.
              </p>
            </article>
            <article>
              <h3>How can I contact Yashika?</h3>
              <p>
                Email <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>,
                or use the social profiles below.
              </p>
            </article>
          </div>
        </section>

        <section
          id="contact"
          className="rp-contact rp-section"
          aria-labelledby="contact-heading"
        >
          <p className="rp-eyebrow">Let&apos;s make something amazing.</p>
          <h2 id="contact-heading">What are we making next?</h2>
          <a className="rp-contact-email" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
          <ul
            className="rp-social-links"
            aria-label="Yashika's social profiles"
          >
            {PROFILE.socialLinks.map((social) => (
              <li key={social.url}>
                <a href={social.url}>
                  <span>{social.label}</span>
                  <span className="rp-social-handle">{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="rp-footer">
        <p>Yashika Varshney · Product Designer × Creative Thinker</p>
        <a href={withBase("/")}>Watch the animated portfolio</a>
      </footer>
    </div>
  );
}
