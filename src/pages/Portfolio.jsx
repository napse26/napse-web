import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
export const portfolioItems = [
  {
    id: 1,
    title: "Innovative Digital Solutions for a Smarter Future",
    tags: ["Web Development", "Branding"],
    desc: "Pioneering next-gen IT solutions that enhance efficiency and digital workflow.",
    image: "/assets/images/project/portfolio-1-1.jpg",
    category: "web"
  },
  {
    id: 2,
    title: "Smart Technology for Today and Tomorrow",
    tags: ["Cyber Security", "Cloud"],
    desc: "Cutting-edge solutions engineered to drive continuous business agility.",
    image: "/assets/images/project/portfolio-1-2.jpg",
    category: "security"
  },
  {
    id: 3,
    title: "High-Availability Cloud Network Architecture",
    tags: ["Cloud", "DevOps"],
    desc: "Building scalable multi-region cloud backbones with zero-loss data replication.",
    image: "/assets/images/project/portfolio-1-3.jpg",
    category: "cloud"
  },
  {
    id: 4,
    title: "Enterprise Risk Mitigation & SIEM Setup",
    tags: ["Cyber Security", "IT Solutions"],
    desc: "Automating continuous threat detection and compliance logging for financial institutions.",
    image: "/assets/images/project/portfolio-1-4.jpg",
    category: "security"
  },
  {
    id: 5,
    title: "Workflow Automation & Smart IT Efficiency",
    tags: ["Automation", "Software"],
    desc: "Streamlining cross-departmental operations with custom API webhooks and integrations.",
    image: "/assets/images/project/portfolio-1-5.jpg",
    category: "it"
  },
  {
    id: 6,
    title: "Omnichannel B2B Portal & Analytics",
    tags: ["Web Development", "UI/UX"],
    desc: "Modern responsive portal with role-based access control and high concurrency performance.",
    image: "/assets/images/project/portfolio-1-6.jpg",
    category: "web"
  }
];
export const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);
  return <div className="portfolio-page-wrapper">
      <PageHeader title="Our Portfolio" currentPage="Portfolio" />

      <section className="portfolio-page" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">SEE OUR WORKS</span>
            </div>
            <h2 className="section-title__title">
              How We've Empowered Businesses with Innovative Tech Solutions
            </h2>
          </div>

          <div className="text-center mb-5">
            <div className="btn-group flex-wrap" role="group">
              {[
    { label: "All Projects", key: "all" },
    { label: "Cyber Security", key: "security" },
    { label: "Cloud Systems", key: "cloud" },
    { label: "Web Applications", key: "web" },
    { label: "IT Strategy", key: "it" }
  ].map((tab) => <button
    key={tab.key}
    type="button"
    onClick={() => setFilter(tab.key)}
    className={`btn ${filter === tab.key ? "btn-primary" : "btn-outline-primary"}`}
    style={{
      margin: "4px",
      borderRadius: "30px",
      padding: "8px 24px",
      fontSize: "14px",
      fontWeight: 600
    }}
  >
                  {tab.label}
                </button>)}
            </div>
          </div>

          <div className="row">
            {filteredItems.map((item) => <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div
    className="portfolio-one__single"
    style={{
      border: "1px solid #eaeaea",
      borderRadius: "12px",
      overflow: "hidden",
      background: "#fff",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }}
  >
                  <div className="portfolio-one__img-box" style={{ position: "relative" }}>
                    <Link to="/portfolio-details">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }}
                      />
                    </Link>
                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        left: "15px",
                        display: "flex",
                        gap: "6px",
                        pointerEvents: "none"
                      }}
                    >
                      {item.tags.map((tag, i) => <span
    key={i}
    style={{
      background: "rgba(31, 37, 50, 0.85)",
      color: "#fff",
      fontSize: "11px",
      fontWeight: 600,
      padding: "4px 10px",
      borderRadius: "4px"
    }}
  >
                          {tag}
                        </span>)}
                    </div>
                  </div>
                  <div style={{ padding: "25px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.4, marginBottom: "10px" }}>
                      <Link to="/portfolio-details">{item.title}</Link>
                    </h3>
                    <p style={{ fontSize: "14px", color: "#666", flex: 1 }}>{item.desc}</p>
                    <div style={{ marginTop: "20px" }}>
                      <Link
    to="/portfolio-details"
    className="thm-btn"
    style={{ padding: "8px 20px", fontSize: "13px" }}
  >
                        Case Study <span className="icon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
