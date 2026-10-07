import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { serviceCategories } from "../data/servicesData";

export const servicesData = serviceCategories;

export const Services = () => {
  return (
    <div className="services-page">
      <PageHeader title="Our Services" currentPage="Our Services" />

      <section
        className="services-one"
        style={{
          padding: "100px 0 90px",
          backgroundColor: "#0B192C",
          position: "relative",
          zIndex: 1
        }}
      >
        <div className="container">
          <div className="section-title text-center mb-5">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline-shape-1" />
              <span className="section-title__tagline-shape-2" />
              <span className="section-title__tagline">WHAT WE OFFER</span>
              <span className="section-title__tagline-shape-2" />
              <span className="section-title__tagline-shape-1" />
            </div>
            <h2
              className="section-title__title"
              style={{ fontSize: "38px", fontWeight: "700", color: "#ffffff", lineHeight: "1.25" }}
            >
              Enterprise IT <span style={{ color: "var(--techguru-base)" }}>Solutions</span> Engineered for Business Growth
            </h2>
            <p
              style={{
                maxWidth: "760px",
                margin: "16px auto 0",
                fontSize: "16px",
                color: "var(--techguru-gray)",
                lineHeight: "26px",
                fontFamily: "var(--techguru-font)"
              }}
            >
              Explore our core technology practice areas. Select any category to view specialized solutions, technical architectures, and service details.
            </p>
          </div>

          <div className="row g-4 mt-2">
            {serviceCategories.map((category) => (
              <div key={category.id} className="col-xl-6 col-lg-6 col-md-12">
                <div
                  className="services-one__single h-100 d-flex flex-column"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "18px",
                    overflow: "hidden",
                    backgroundColor: "#0D1D35",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div style={{ position: "relative", height: "230px", overflow: "hidden" }}>
                    <img
                      src={category.image}
                      alt={category.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: "rgba(11, 25, 44, 0.88)",
                        color: "#fff",
                        padding: "6px 14px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: 700,
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(4px)"
                      }}
                    >
                      {category.tabs.length} Specialized Solutions
                    </div>
                  </div>

                  <div style={{ padding: "30px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                      <span className={category.icon} style={{ fontSize: "30px", color: "var(--techguru-base)" }} />
                      <h3 style={{ fontSize: "22px", fontWeight: 700, margin: 0 }}>
                        <Link to={category.path} style={{ color: "#ffffff", textDecoration: "none" }}>
                          {category.title}
                        </Link>
                      </h3>
                    </div>

                    <p style={{ fontSize: "14px", color: "#5CB0E9", fontWeight: "600", marginBottom: "12px" }}>
                      {category.tagline}
                    </p>

                    <p
                      style={{
                        fontSize: "16px",
                        color: "var(--techguru-gray)",
                        lineHeight: "26px",
                        fontFamily: "var(--techguru-font)",
                        marginBottom: "20px"
                      }}
                    >
                      {category.description1}
                    </p>

                    {/* Sub-item pills */}
                    <div style={{ marginBottom: "24px", flexGrow: 1 }}>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "var(--techguru-base)",
                          display: "block",
                          marginBottom: "10px",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px"
                        }}
                      >
                        Featured Solutions:
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {category.tabs.map((tab) => (
                          <Link
                            key={tab.id}
                            to={`/services/${category.slug}?tab=${tab.slug}`}
                            style={{
                              fontSize: "13px",
                              padding: "5px 12px",
                              borderRadius: "8px",
                              background: "rgba(255, 255, 255, 0.06)",
                              color: "#e2e8f0",
                              fontWeight: 500,
                              textDecoration: "none",
                              border: "1px solid rgba(255, 255, 255, 0.08)",
                              transition: "all 0.2s ease"
                            }}
                          >
                            • {tab.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <Link
                        to={category.path}
                        className="thm-btn"
                        style={{
                          padding: "9px 24px",
                          fontSize: "13px",
                          borderRadius: "25px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px"
                        }}
                      >
                        Explore Category <span className="icon-right-arrow" />
                      </Link>
                      <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", fontWeight: 500 }}>
                        {category.tabs.length} tabs included
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #07101E 0%, #0D1D35 100%)",
          color: "#fff",
          padding: "75px 0",
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        <div className="container">
          <h2 style={{ color: "#fff", fontSize: "32px", fontWeight: 700, marginBottom: "14px" }}>
            Need a Tailored IT Infrastructure or Technology Assessment?
          </h2>
          <p
            style={{
              maxWidth: "660px",
              margin: "0 auto 26px",
              color: "var(--techguru-gray)",
              fontSize: "16px",
              lineHeight: "26px",
              fontFamily: "var(--techguru-font)"
            }}
          >
            Our UAE-certified systems architects will audit your current infrastructure and outline a phased, cost-effective technology roadmap aligned with your business objectives.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", alignItems: "center" }}>
            <Link to="/contact" className="thm-btn" style={{ padding: "12px 30px", borderRadius: "30px" }}>
              Request a Consultation <span className="icon-right-arrow" />
            </Link>
            <a
              href="tel:971521475975"
              style={{ color: "#fff", fontWeight: 600, fontSize: "16px", padding: "10px 20px" }}
            >
              <i className="fas fa-phone-alt" style={{ color: "var(--techguru-base)", marginRight: "8px" }} />
              +971 52 147 5975
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
