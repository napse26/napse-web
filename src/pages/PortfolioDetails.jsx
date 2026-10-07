import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
export const PortfolioDetails = () => {
  return <div className="portfolio-details-page">
      <PageHeader
    title="Project Case Study"
    currentPage="Portfolio Details"
    parentPage={{ name: "Portfolio", link: "/portfolio" }}
  />

      <section className="portfolio-details" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="portfolio-details__img-box mb-5">
            <img
    src="/assets/images/project/portfolio-details-img-1.jpg"
    alt="Project Showcase"
    style={{ width: "100%", maxHeight: "500px", objectFit: "cover", borderRadius: "12px" }}
  />
          </div>

          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="portfolio-details__left">
                <h3 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "20px" }}>
                  Enterprise Multi-Cloud Infrastructure &amp; Zero-Trust Migration
                </h3>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#555", marginBottom: "25px" }}>
                  The client was facing severe performance latency and vulnerability gaps due to an aging on-premise
                  datacenter. NAPSE was engaged to design and execute a comprehensive zero-downtime migration strategy
                  to a resilient hybrid cloud architecture.
                </p>

                <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "15px" }}>
                  The Project Challenge
                </h4>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#666", marginBottom: "25px" }}>
                  With over 40 critical business databases handling high transaction volumes 24/7,
                  the primary constraint was ensuring business continuity without taking financial services offline.
                  Additionally, regional data privacy mandates required air-gapped encryption and continuous compliance audits.
                </p>

                <div className="row my-4">
                  <div className="col-md-6 mb-3">
                    <img
    src="/assets/images/project/portfolio-details-img-box-img-1.jpg"
    alt="Implementation 1"
    style={{ width: "100%", borderRadius: "8px" }}
  />
                  </div>
                  <div className="col-md-6 mb-3">
                    <img
    src="/assets/images/project/portfolio-details-img-box-img-2.jpg"
    alt="Implementation 2"
    style={{ width: "100%", borderRadius: "8px" }}
  />
                  </div>
                </div>

                <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "15px" }}>
                  Engineering Solution &amp; Impact
                </h4>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#666" }}>
                  We deployed an automated Kubernetes cluster backed by dual-region active-active replication,
                  integrated automated SIEM monitoring, and reduced transaction latency by 68%. Operating costs decreased
                  by 35% within the first six months.
                </p>

                <div className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top flex-wrap gap-3">
                  <Link to="/portfolio" className="thm-btn" style={{ padding: "8px 24px", fontSize: "14px" }}>
                    <span className="icon-right-arrow-2" style={{ transform: "rotate(180deg)", display: "inline-block" }} /> All Projects
                  </Link>
                  <Link to="/contact" className="thm-btn" style={{ padding: "8px 24px", fontSize: "14px" }}>
                    Start Similar Project <span className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div
    style={{
      background: "#f8f9fb",
      padding: "35px",
      borderRadius: "12px",
      border: "1px solid #eef0f5"
    }}
  >
                <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "25px", borderBottom: "2px solid var(--techguru-base)", paddingBottom: "10px" }}>
                  Project Metadata
                </h4>
                <ul className="list-unstyled" style={{ lineHeight: 2.2, fontSize: "15px" }}>
                  <li>
                    <strong>Client:</strong> Gulf Financial Group
                  </li>
                  <li>
                    <strong>Category:</strong> Cloud &amp; Cyber Security
                  </li>
                  <li>
                    <strong>Timeline:</strong> 4 Months
                  </li>
                  <li>
                    <strong>Location:</strong> Abu Dhabi, UAE
                  </li>
                  <li>
                    <strong>Architecture:</strong> Kubernetes, Terraform, AWS
                  </li>
                  <li>
                    <strong>Security:</strong> SOC 2, ISO 27001
                  </li>
                </ul>

                <div className="mt-4 pt-4 border-top">
                  <h5 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}>Have a Project in Mind?</h5>
                  <p style={{ fontSize: "13px", color: "#666", marginBottom: "15px" }}>
                    Speak with the technical lead who managed this engagement.
                  </p>
                  <Link to="/contact" className="btn btn-primary w-100" style={{ borderRadius: "6px", fontWeight: 600 }}>
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
