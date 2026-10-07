import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
export const About = () => {
  return <div className="about-page">
      <PageHeader title="About Us" currentPage="About Us" />

      {
    /* About Four Section */
  }
      <section className="about-four">
        <div
    className="about-four__bg-shape"
    style={{ backgroundImage: "url(/assets/images/shapes/about-four-bg-shape.png)" }}
  />
        <div
    className="about-four__bg-shape-2"
    style={{ backgroundImage: "url(/assets/images/shapes/about-four-bg-shape-2.png)" }}
  />
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-four__left">
                <div className="about-four__img-box">
                  <div className="about-four__img">
                    <img src="/assets/images/resources/about-four-img-1.jpg" alt="About Main" />
                  </div>
                  <div className="about-four__img-2">
                    <img src="/assets/images/resources/about-four-img-2.jpg" alt="About Team" />
                  </div>
                  <div className="about-four__experience">
                    <div className="about-four__experience-inner">
                      <div className="about-four__experience-count-box">
                        <h3 className="odometer">10+</h3>
                      </div>
                      <p className="about-four__experience-count-text">
                        Years of <br /> Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="about-four__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline-shape-1" />
                    <span className="section-title__tagline-shape-2" />
                    <span className="section-title__tagline">About Us</span>
                    <span className="section-title__tagline-shape-2" />
                    <span className="section-title__tagline-shape-1" />
                  </div>
                  <h2 className="section-title__title">
                    Powering Businesses With{" "}
                    <span>Reliable IT Solutions</span>
                  </h2>
                  <p style={{ color: "var(--techguru-base)", fontSize: "15px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginTop: "12px", marginBottom: "16px" }}>
                    Technology That Works For Your Business
                  </p>
                </div>
                <p
                  className="about-four__text"
                  style={{
                    fontFamily: "var(--techguru-font)",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "var(--techguru-gray)",
                    marginBottom: "14px"
                  }}
                >
                  <strong style={{ color: "#fff" }}>NAPSE</strong> is a UAE-based IT solutions and technology services company delivering reliable, scalable, and cost-effective solutions for businesses across industries.
                </p>
                <p
                  className="about-four__text"
                  style={{
                    fontFamily: "var(--techguru-font)",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "var(--techguru-gray)",
                    marginBottom: "20px"
                  }}
                >
                  From IT hardware and infrastructure to cloud, cybersecurity, networking, software licensing, and enterprise technologies, we help businesses build and manage the technology they need to grow.
                </p>

                {/* Single dashed divider */}
                <div style={{ borderTop: "1px dashed rgba(255, 255, 255, 0.15)", margin: "22px 0" }} />

                <div className="about-four__points-box" style={{ marginBottom: "20px" }}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          Reliable hardware, networking, and infrastructure solutions tailored to your business.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          Scalable cloud and enterprise technologies designed for modern businesses.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          Secure, connected, and resilient IT environments that protect your business.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          Genuine software licensing and end-to-end technology services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Single dashed divider */}
                <div style={{ borderTop: "1px dashed rgba(255, 255, 255, 0.15)", margin: "22px 0" }} />

                <div style={{ marginBottom: "26px" }}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="3.5" fill="var(--techguru-base)" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          From sourcing IT equipment to implementing complete infrastructure solutions, we support your technology requirements end-to-end.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="3.5" fill="var(--techguru-base)" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          We understand your business requirements and deliver practical, efficient solutions aligned with your technology goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Why Choose Three Section */
  }
      <section className="why-choose-three">
        <div
    className="why-choose-three__bg-shape float-bob-x"
    style={{ backgroundImage: "url(/assets/images/shapes/why-choose-three-bg-shape.png)" }}
  />
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Why Choose Us</span>
            </div>
            <h2 className="section-title__title">
              Powering Your Business with <span>Reliable</span> &amp; Future-Ready IT Architecture
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-3">
              <div className="why-choose-three__single mb-4">
                <div className="why-choose-three__icon">
                  <span className="icon-quality" />
                </div>
                <h3 className="why-choose-three__title">Unmatched Quality</h3>
                <div className="why-choose-three__bdr" />
                <p className="why-choose-three__text">
                  We deliver exceptional systems and engineering that exceed standard SLAs every time.
                </p>
              </div>
              <div className="why-choose-three__single">
                <div className="why-choose-three__icon">
                  <span className="icon-team" />
                </div>
                <h3 className="why-choose-three__title">Trusted Expertise</h3>
                <div className="why-choose-three__bdr" />
                <p className="why-choose-three__text">
                  Backed by certified cloud architects and seasoned cybersecurity practitioners.
                </p>
              </div>
            </div>
            <div className="col-xl-6 text-center my-4 my-xl-0">
              <div className="why-choose-three__img">
                <img
    src="/assets/images/resources/why-choose-three-img.jpg"
    alt="Why Choose NAPSE"
    style={{ borderRadius: "12px", maxWidth: "100%" }}
  />
              </div>
            </div>
            <div className="col-xl-3">
              <div className="why-choose-three__single mb-4">
                <div className="why-choose-three__icon">
                  <span className="icon-customer-centricity" />
                </div>
                <h3 className="why-choose-three__title">User-Centric Design</h3>
                <div className="why-choose-three__bdr" />
                <p className="why-choose-three__text">
                  Your business continuity and stakeholder satisfaction drive every engineering choice.
                </p>
              </div>
              <div className="why-choose-three__single">
                <div className="why-choose-three__icon">
                  <span className="icon-support" />
                </div>
                <h3 className="why-choose-three__title">24/7 Rapid Support</h3>
                <div className="why-choose-three__bdr" />
                <p className="why-choose-three__text">
                  Real human technicians monitoring infrastructure around the clock from Abu Dhabi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Counter Section */
  }
      <section className="counter-one" style={{ padding: "60px 0", background: "#f5f7fb" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <h2 style={{ fontSize: "42px", fontWeight: 800, color: "var(--techguru-base)" }}>150+</h2>
              <p style={{ fontWeight: 600, color: "#555" }}>Projects Delivered</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h2 style={{ fontSize: "42px", fontWeight: 800, color: "var(--techguru-base)" }}>99%</h2>
              <p style={{ fontWeight: 600, color: "#555" }}>Client Retention</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h2 style={{ fontSize: "42px", fontWeight: 800, color: "var(--techguru-base)" }}>25+</h2>
              <p style={{ fontWeight: 600, color: "#555" }}>Expert Specialists</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h2 style={{ fontSize: "42px", fontWeight: 800, color: "var(--techguru-base)" }}>10+</h2>
              <p style={{ fontWeight: 600, color: "#555" }}>Years in Industry</p>
            </div>
          </div>
        </div>
      </section>

      {
    /* CTA Box */
  }
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "20px" }}>
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p style={{ maxWidth: "650px", margin: "0 auto 30px", color: "#666" }}>
            Contact our engineering specialists today for an in-depth infrastructure review and custom solution blueprint.
          </p>
          <Link to="/contact" className="thm-btn">
            Schedule a Consultation <span className="icon-right-arrow" />
          </Link>
        </div>
      </section>
    </div>;
};
