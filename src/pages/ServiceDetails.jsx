import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ServiceSidebar } from "../components/ServiceSidebar";
import { serviceCategories, getCategoryBySlug } from "../data/servicesData";

export const ServiceDetails = ({ initialServiceId }) => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const requestedSlug = initialServiceId || params.serviceId || "it-infrastructure";

  // Resolve category
  let category = getCategoryBySlug(requestedSlug);
  let initialTabSlug = searchParams.get("tab") || null;

  if (!category) {
    // Check if requestedSlug is actually a tab slug
    for (const cat of serviceCategories) {
      const match = cat.tabs.find((t) => t.slug === requestedSlug || t.id === requestedSlug);
      if (match) {
        category = cat;
        initialTabSlug = match.slug;
        break;
      }
    }
  }

  if (!category) {
    category = serviceCategories[0];
  }

  const [activeTabSlug, setActiveTabSlug] = useState(
    initialTabSlug && category.tabs.some((t) => t.slug === initialTabSlug)
      ? initialTabSlug
      : category.tabs[0].slug
  );

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl && category.tabs.some((t) => t.slug === tabFromUrl)) {
      setActiveTabSlug(tabFromUrl);
    } else {
      setActiveTabSlug(category.tabs[0].slug);
    }
  }, [category, searchParams]);

  const activeTab = category.tabs.find((t) => t.slug === activeTabSlug) || category.tabs[0];
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSelectTab = (tabSlug) => {
    setActiveTabSlug(tabSlug);
    setSearchParams({ tab: tabSlug });
    setActiveFaq(null);
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  // Ensure 6 points for the 2-column checklist like the original design
  const coreFeaturesList = [
    ...(activeTab.capabilities || []),
    "24/7 technical monitoring & proactive performance telemetry",
    "Certified SLA response & turnkey UAE on-site engineering"
  ].slice(0, 6);

  return (
    <div className="service-details-page">
      <PageHeader
        title={activeTab.title || "Service Details"}
        currentPage="Service Details"
        parentPage={{ name: "Services", link: "/services" }}
      />

      <section
        className="services-details"
        style={{
          backgroundColor: "#0B192C",
          padding: "120px 0 100px",
          position: "relative",
          zIndex: 1
        }}
      >
        <div className="services-details__shape-1" />
        <div className="container">
          <div className="row">
            {/* Left Sidebar */}
            <div className="col-xl-4 col-lg-5 mb-5 mb-lg-0">
              <ServiceSidebar
                category={category}
                activeTabId={activeTab.slug}
                onSelectTab={handleSelectTab}
              />
            </div>

            {/* Right Content Area - Dark Theme matching original design */}
            <div className="col-xl-8 col-lg-7">
              <div className="services-details__right">
                {/* Main Heading */}
                <h1
                  className="services-details__title-1"
                  style={{
                    fontSize: "40px",
                    fontWeight: "700",
                    lineHeight: "1.25",
                    color: "var(--techguru-white)",
                    margin: "0 0 14px"
                  }}
                >
                  {activeTab.title}
                </h1>

                {activeTab.tagline && (
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#5CB0E9",
                      fontWeight: "600",
                      margin: "0 0 16px",
                      lineHeight: "26px"
                    }}
                  >
                    {activeTab.tagline}
                  </p>
                )}

                {/* Divider Line */}
                <div
                  className="services-details__bdr"
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    margin: "24px 0 28px"
                  }}
                />

                {/* Paragraph 1 */}
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "var(--techguru-gray)",
                    fontFamily: "var(--techguru-font)",
                    margin: "0 0 20px"
                  }}
                >
                  {activeTab.description1}
                </p>

                {/* Paragraph 2 */}
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "var(--techguru-gray)",
                    fontFamily: "var(--techguru-font)",
                    margin: "0 0 36px"
                  }}
                >
                  {activeTab.description2}
                </p>

                {/* Main Featured Image from Assets */}
                <div className="services-details__img-1 my-4">
                  <img
                    src={activeTab.image || "/assets/images/services/services-details-img-1.jpg"}
                    alt={activeTab.title}
                    style={{
                      width: "100%",
                      height: "430px",
                      objectFit: "cover",
                      borderRadius: "28px",
                      display: "block"
                    }}
                  />
                </div>

                {/* Services Core Features */}
                <h2
                  className="services-details__title-2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "var(--techguru-white)",
                    marginTop: "50px",
                    marginBottom: "16px",
                    lineHeight: "1.3"
                  }}
                >
                  Services Core Features
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "var(--techguru-gray)",
                    fontFamily: "var(--techguru-font)",
                    marginBottom: "28px"
                  }}
                >
                  {activeTab.capabilitiesDesc ||
                    "Tailored technology strategies aligned with your business goals. Competitor analysis and infrastructure research for actionable insights. Roadmaps for short-term migrations and long-term scalable growth."}
                </p>

                {/* Core Features 6 Points List (2 Columns) */}
                <div className="services-details__points-box" style={{ margin: "10px 0 45px" }}>
                  <div className="row g-3">
                    {coreFeaturesList.map((point, pIdx) => (
                      <div key={pIdx} className="col-md-6">
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                          <span
                            className="icon-tick-inside-circle"
                            style={{
                              flexShrink: 0,
                              fontSize: "18px",
                              color: "var(--techguru-base)",
                              marginTop: "3px"
                            }}
                          />
                          <p
                            style={{
                              margin: 0,
                              fontSize: "16px",
                              lineHeight: "24px",
                              color: "var(--techguru-gray)",
                              fontFamily: "var(--techguru-font)"
                            }}
                          >
                            {point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Two Mid-Section Images Side by Side from Assets */}
                <div className="services-details__img-box my-4">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="services-details__img-box-img" style={{ margin: 0 }}>
                        <img
                          src="/assets/images/services/services-details-img-box-img-1.jpg"
                          alt="Technology Execution"
                          style={{
                            width: "100%",
                            height: "270px",
                            objectFit: "cover",
                            borderRadius: "24px",
                            display: "block"
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="services-details__img-box-img" style={{ margin: 0 }}>
                        <img
                          src="/assets/images/services/services-details-img-box-img-2.jpg"
                          alt="Strategic Collaboration"
                          style={{
                            width: "100%",
                            height: "270px",
                            objectFit: "cover",
                            borderRadius: "24px",
                            display: "block"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Your Partner in Digital Success */}
                <h2
                  className="services-details__title-3"
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "var(--techguru-white)",
                    marginTop: "48px",
                    marginBottom: "16px",
                    lineHeight: "1.3"
                  }}
                >
                  Your Partner in Digital Success
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "var(--techguru-gray)",
                    fontFamily: "var(--techguru-font)",
                    marginBottom: "35px"
                  }}
                >
                  Our services go beyond traditional marketing and support—offering innovative, data-driven, and tailored
                  strategies to help your business thrive in the digital landscape. With a team of experts committed to
                  creativity, precision, and measurable results, we deliver solutions that elevate your brand and engage your
                  audience.
                </p>

                {/* 4 Feature Points (2x2 Grid) */}
                <div className="services-details__points-box-2" style={{ margin: "20px 0 45px" }}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
                        <div style={{ flexShrink: 0 }}>
                          <span
                            className="icon-laptop"
                            style={{ fontSize: "40px", color: "var(--techguru-base)", display: "inline-block" }}
                          />
                        </div>
                        <div>
                          <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--techguru-white)", marginBottom: "6px" }}>
                            Tailored Strategies
                          </h4>
                          <p style={{ margin: 0, fontSize: "16px", lineHeight: "24px", color: "var(--techguru-gray)", fontFamily: "var(--techguru-font)" }}>
                            Customized architecture plans designed specifically for your business goals and target workload.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
                        <div style={{ flexShrink: 0 }}>
                          <span
                            className="icon-data-analytics"
                            style={{ fontSize: "40px", color: "var(--techguru-base)", display: "inline-block" }}
                          />
                        </div>
                        <div>
                          <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--techguru-white)", marginBottom: "6px" }}>
                            Data-Driven Decisions
                          </h4>
                          <p style={{ margin: 0, fontSize: "16px", lineHeight: "24px", color: "var(--techguru-gray)", fontFamily: "var(--techguru-font)" }}>
                            Comprehensive analytics and telemetry insights to optimize systems and ensure measurable results.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
                        <div style={{ flexShrink: 0 }}>
                          <span
                            className="icon-technology"
                            style={{ fontSize: "40px", color: "var(--techguru-base)", display: "inline-block" }}
                          />
                        </div>
                        <div>
                          <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--techguru-white)", marginBottom: "6px" }}>
                            End-to-End Solutions
                          </h4>
                          <p style={{ margin: 0, fontSize: "16px", lineHeight: "24px", color: "var(--techguru-gray)", fontFamily: "var(--techguru-font)" }}>
                            From hardware procurement to 24/7 managed support, we cover all aspects of digital transformation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
                        <div style={{ flexShrink: 0 }}>
                          <span
                            className="icon-shield"
                            style={{ fontSize: "40px", color: "var(--techguru-base)", display: "inline-block" }}
                          />
                        </div>
                        <div>
                          <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--techguru-white)", marginBottom: "6px" }}>
                            Transparent Reporting
                          </h4>
                          <p style={{ margin: 0, fontSize: "16px", lineHeight: "24px", color: "var(--techguru-gray)", fontFamily: "var(--techguru-font)" }}>
                            Regular performance updates and easy-to-understand incident reports that keep you informed every step.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Landscape Image from Assets */}
                <div className="services-details__bottom-img my-4">
                  <img
                    src="/assets/images/services/services-details-bottom-img.jpg"
                    alt="Futuristic Enterprise Technology"
                    style={{
                      width: "100%",
                      height: "320px",
                      objectFit: "cover",
                      borderRadius: "24px",
                      display: "block"
                    }}
                  />
                </div>

                {/* Section: Get Started */}
                <h2
                  className="services-details__title-4"
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "var(--techguru-white)",
                    marginTop: "48px",
                    marginBottom: "14px",
                    lineHeight: "1.3"
                  }}
                >
                  Get Started
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "var(--techguru-gray)",
                    fontFamily: "var(--techguru-font)",
                    marginBottom: "28px"
                  }}
                >
                  Bring your vision to life with our tailored solutions, creative strategies, and professional support.
                  Whether you're looking to enhance your online presence, optimize your enterprise IT stack, or scale your
                  infrastructure across the UAE, we provide the tools, expertise, and guidance you need to achieve success.
                  Let's turn your ideas into reality today!
                </p>

                {/* CTA Action Buttons */}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
                  <Link
                    to="/contact"
                    className="thm-btn"
                    style={{ padding: "14px 34px", borderRadius: "30px", fontSize: "15px" }}
                  >
                    Speak With an Engineer <span className="icon-right-arrow" />
                  </Link>
                  <a
                    href="tel:971521475975"
                    style={{
                      color: "var(--techguru-base)",
                      fontWeight: 700,
                      fontSize: "16px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <i className="fas fa-phone-alt" /> +971 52 147 5975
                  </a>
                </div>

                {/* FAQ Accordion - Dark Theme */}
                {activeTab.faqs && activeTab.faqs.length > 0 && (
                  <div style={{ marginTop: "50px", paddingTop: "35px", borderTop: "1px dashed rgba(255, 255, 255, 0.15)" }}>
                    <h3 style={{ fontSize: "24px", fontWeight: "700", color: "var(--techguru-white)", marginBottom: "20px" }}>
                      Frequently Asked Questions
                    </h3>
                    <div className="accordion" id="serviceFaqAccordion">
                      {activeTab.faqs.map((faq, idx) => {
                        const isOpen = activeFaq === idx;
                        return (
                          <div
                            key={idx}
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.04)",
                              border: "1px solid rgba(255, 255, 255, 0.08)",
                              borderRadius: "12px",
                              marginBottom: "12px",
                              overflow: "hidden"
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => setActiveFaq(isOpen ? null : idx)}
                              style={{
                                width: "100%",
                                padding: "18px 22px",
                                background: isOpen ? "rgba(61, 114, 252, 0.12)" : "transparent",
                                color: isOpen ? "#5CB0E9" : "var(--techguru-white)",
                                fontWeight: 600,
                                fontSize: "16px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                border: "none",
                                textAlign: "left",
                                cursor: "pointer",
                                transition: "all 0.25s ease"
                              }}
                            >
                              <span>{faq.q}</span>
                              <span
                                className={`fa fa-angle-${isOpen ? "up" : "down"}`}
                                style={{ marginLeft: "14px", flexShrink: 0, color: "var(--techguru-base)" }}
                              />
                            </button>
                            {isOpen && (
                              <div
                                style={{
                                  padding: "20px 22px",
                                  color: "var(--techguru-gray)",
                                  fontSize: "16px",
                                  lineHeight: "26px",
                                  fontFamily: "var(--techguru-font)",
                                  borderTop: "1px solid rgba(255, 255, 255, 0.06)"
                                }}
                              >
                                {faq.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
