import { useState } from "react";
import { Link } from "react-router-dom";

const FooterArrow = () => (
  <svg
    width="7"
    height="11"
    viewBox="0 0 8 12"
    fill="none"
    style={{ flexShrink: 0, color: "var(--techguru-base)", transition: "transform 0.2s ease" }}
    aria-hidden="true"
  >
    <path
      d="M1.75 1.5L6.25 6L1.75 10.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Footer = ({ showNewsletter = true }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5e3);
    }
  };
  return <>
      {showNewsletter && <section className="newsletter-two" style={{ marginTop: 0 }}>
          <div className="newsletter-two__shape-1">
            <img src="/assets/images/shapes/newsletter-two-shape-1.png" alt="" />
          </div>
          <div className="newsletter-two__shape-2">
            <img src="/assets/images/shapes/newsletter-two-shape-2.png" alt="" />
          </div>
          <div className="container">
            <div
              className="newsletter-two__inner"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "24px",
                padding: "36px 0 34px"
              }}
            >
              <div className="newsletter-two__left" style={{ maxWidth: "540px" }}>
                <h2 className="newsletter-two__title">Subscribe to Our Newsletter</h2>
                <p className="newsletter-two__text">
                  Get the latest SEO tips and software insights straight to your inbox.
                </p>
              </div>
              <div className="newsletter-two__right" style={{ maxWidth: "540px", width: "100%" }}>
                <form className="newsletter-two__form" onSubmit={handleNewsletter}>
                  <div className="newsletter-two__input" style={{ position: "relative" }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      required
                      style={{
                        height: "60px",
                        width: "100%",
                        background: "transparent",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "20px",
                        outline: "none",
                        padding: "0 195px 0 25px",
                        color: "#fff",
                        fontSize: "16px"
                      }}
                    />
                    <button
                      type="submit"
                      className="thm-btn"
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        bottom: "5px",
                        border: "none",
                        borderRadius: "16px",
                        padding: "0 26px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "15px",
                        fontWeight: "600",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Subscribe Now <span className="icon-right-arrow" />
                    </button>
                  </div>
                  <div className="checked-box" style={{ marginTop: "14px" }}>
                    <input type="checkbox" name="skipper1" id="skipper" defaultChecked />
                    <label htmlFor="skipper">
                      <span />by Subscribing, you accept our Privacy Policy
                    </label>
                  </div>
                </form>
                {subscribed && <div
    style={{
      marginTop: "10px",
      color: "#28a745",
      fontWeight: "bold",
      fontSize: "14px"
    }}
  >
                    Thank you for subscribing to NAPSE updates!
                  </div>}
              </div>
            </div>
          </div>
        </section>}

      <footer className="site-footer-two">
        <div className="site-footer-two__shape-1" />
        <div className="site-footer-two__shape-2" />
        <div className="site-footer-two__shape-3" />
        <div className="site-footer-two__top">
          <div className="container">
            <div className="row g-4">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12 mb-3 mb-lg-0">
                <div
                  className="site-footer-two__about"
                  style={{
                    backgroundColor: "rgba(14, 23, 42, 0.7)",
                    borderRadius: "24px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "36px 30px"
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "26px",
                      fontWeight: "700",
                      fontFamily: "var(--techguru-font)",
                      marginBottom: "0",
                      letterSpacing: "0.2px"
                    }}
                  >
                    NAPSE Digital
                  </h3>

                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      margin: "24px 0"
                    }}
                  />

                  <ul className="list-unstyled site-footer-two__contact-list" style={{ margin: 0, padding: 0 }}>
                    <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "0" }}>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #3D72FC 0%, #1A44B8 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px"
                        }}
                      >
                        <span className="icon-contact" style={{ color: "#fff", fontSize: "18px" }} />
                      </div>
                      <div style={{ marginLeft: "14px" }}>
                        <h5
                          style={{
                            color: "#5CB0E9",
                            fontSize: "16px",
                            fontWeight: "600",
                            marginBottom: "4px",
                            fontFamily: "var(--techguru-font)"
                          }}
                        >
                          Contact Info
                        </h5>
                        <p style={{ margin: 0, lineHeight: "1.4" }}>
                          <a href="mailto:cst@napse.ae" style={{ color: "#fff", fontSize: "14px", display: "block" }}>
                            cst@napse.ae
                          </a>
                          <a href="tel:971521475975" style={{ color: "#fff", fontSize: "14px", display: "block", marginTop: "3px" }}>
                            +971 52 147 5975
                          </a>
                        </p>
                      </div>
                    </li>

                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "rgba(255, 255, 255, 0.12)",
                        margin: "24px 0"
                      }}
                    />

                    <li style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #3D72FC 0%, #1A44B8 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px"
                        }}
                      >
                        <span className="icon-pin" style={{ color: "#fff", fontSize: "18px" }} />
                      </div>
                      <div style={{ marginLeft: "14px" }}>
                        <h5
                          style={{
                            color: "#5CB0E9",
                            fontSize: "16px",
                            fontWeight: "600",
                            marginBottom: "4px",
                            fontFamily: "var(--techguru-font)"
                          }}
                        >
                          Location
                        </h5>
                        <p style={{ margin: 0, color: "#fff", fontSize: "14px", lineHeight: "1.4" }}>
                          Abu Dhabi <br /> United Arab Emirates
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12 mb-4 mb-md-0">
                <div className="footer-widget-two__quick-links">
                  <h4 className="footer-widget-two__title">Pages</h4>
                  <ul className="footer-widget-two__quick-links-list list-unstyled" style={{ margin: 0, padding: 0 }}>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Home</span>
                      </Link>
                    </li>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/about" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Portfolio</span>
                      </Link>
                    </li>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/blog-list" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Blogs</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Careers</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4 mb-md-0">
                <div className="footer-widget-two__support">
                  <h4 className="footer-widget-two__title">Support</h4>
                  <ul className="footer-widget-two__quick-links-list list-unstyled" style={{ margin: 0, padding: 0 }}>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/terms-and-conditions" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Terms &amp; Condition</span>
                      </Link>
                    </li>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/faq" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>FAQs</span>
                      </Link>
                    </li>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Contact Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Our Services</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="footer-widget-two__services">
                  <h4 className="footer-widget-two__title">Our Services</h4>
                  <ul className="footer-widget-two__quick-links-list list-unstyled" style={{ margin: 0, padding: 0 }}>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/services/it-hardware-equipment-supply" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>IT Hardware &amp; Supply</span>
                      </Link>
                    </li>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/services/servers-storage-solutions" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Servers &amp; Storage</span>
                      </Link>
                    </li>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/services/networking-security-solutions" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Networking &amp; Security</span>
                      </Link>
                    </li>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/services/cybersecurity-solutions" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Cybersecurity Solutions</span>
                      </Link>
                    </li>
                    <li style={{ marginBottom: "14px" }}>
                      <Link to="/services/cloud-data-center-solutions" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Cloud &amp; Data Center</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/annual-maintenance-support" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <FooterArrow />
                        <span>Annual Maintenance (AMC)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer-two__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer-two__bottom-inner">
                  <div className="site-footer-two__copyright">
                    <p className="site-footer-two__copyright-text">
                      ⓒ Copyright 2025. All rights reserved. NAPSE Digital.
                    </p>
                  </div>
                  <div className="site-footer-two__social-box">
                    <h4 className="site-footer-two__social-title">Follow Us:</h4>
                    <div className="site-footer-two__social-box-inner">
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <span className="icon-facebook" />
                      </a>
                      <a
    href="https://www.linkedin.com/company/napse/posts/?feedView=all"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
                        <span className="icon-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>;
};
