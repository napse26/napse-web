import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const plans = [
    {
      name: "Starter Defense",
      monthlyPrice: 199,
      yearlyPrice: 159,
      desc: "Essential cybersecurity monitoring and backup for emerging business operations.",
      features: [
        "Endpoint Protection (up to 15 devices)",
        "Automated Daily Cloud Backups",
        "24/7 Security Health Telemetry",
        "Standard Email & Ticket Support (sub-4hr)",
        "Quarterly Vulnerability Audit"
      ],
      popular: false
    },
    {
      name: "Professional Business",
      monthlyPrice: 499,
      yearlyPrice: 399,
      desc: "Full-stack cloud operations, SIEM telemetry, and rapid incident response.",
      features: [
        "Endpoint Protection (up to 60 devices)",
        "Hourly Immutable Cloud Snapshots",
        "24/7/365 Real-Time SOC Monitoring",
        "Sub-15 Minute Emergency SLA",
        "Disaster Recovery Simulation Drills",
        "Cloud Infrastructure Cost Optimization",
        "Dedicated Technical Account Manager"
      ],
      popular: true
    },
    {
      name: "Enterprise Custom",
      monthlyPrice: 999,
      yearlyPrice: 799,
      desc: "Bespoke multi-cloud architecture, automated compliance, and custom software SLAs.",
      features: [
        "Unlimited Device & Server Protection",
        "Multi-Region Zero-Loss Replication",
        "Dedicated On-Premise & Cloud Engineers",
        "Immediate Phone & Instant War-Room SLA",
        "Custom Microservices & API Integration",
        "Full ISO 27001 & Regulatory Audit Filing"
      ],
      popular: false
    }
  ];
  return <div className="pricing-page">
      <PageHeader title="Transparent Pricing" currentPage="Pricing" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">FLEXIBLE PACKAGES</span>
            </div>
            <h2 className="section-title__title">
              Clear &amp; Predictable IT <span>Service Plans</span>
            </h2>
            <p style={{ maxWidth: "600px", margin: "15px auto 0", color: "#666" }}>
              Choose the level of management, monitoring, and engineering support that aligns with your organization's roadmap.
            </p>
          </div>

          <div className="text-center my-4">
            <div className="btn-group" role="group">
              <button
    type="button"
    className={`btn ${billingCycle === "monthly" ? "btn-dark" : "btn-outline-dark"}`}
    onClick={() => setBillingCycle("monthly")}
    style={{
      padding: "8px 24px",
      fontWeight: 600,
      backgroundColor: billingCycle === "monthly" ? "var(--techguru-base)" : "transparent",
      color: billingCycle === "monthly" ? "#0B192C" : "inherit",
      borderColor: "var(--techguru-base)"
    }}
  >
                Monthly Billing
              </button>
              <button
    type="button"
    className={`btn ${billingCycle === "yearly" ? "btn-dark" : "btn-outline-dark"}`}
    onClick={() => setBillingCycle("yearly")}
    style={{
      padding: "8px 24px",
      fontWeight: 600,
      backgroundColor: billingCycle === "yearly" ? "var(--techguru-base)" : "transparent",
      color: billingCycle === "yearly" ? "#0B192C" : "inherit",
      borderColor: "var(--techguru-base)"
    }}
  >
                Yearly Billing <span className="badge bg-success ms-1">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="row mt-5">
            {plans.map((p, idx) => {
    const price = billingCycle === "monthly" ? p.monthlyPrice : p.yearlyPrice;
    return <div key={idx} className="col-lg-4 col-md-6 mb-4">
                  <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        border: p.popular ? "2px solid var(--techguru-base)" : "1px solid #eaeaea",
        padding: "40px 30px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: p.popular ? "0 12px 35px rgba(255, 210, 93, 0.2)" : "none"
      }}
    >
                    {p.popular && <div
      style={{
        position: "absolute",
        top: "-14px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "var(--techguru-base)",
        color: "#0B192C",
        fontSize: "12px",
        fontWeight: 700,
        padding: "4px 16px",
        borderRadius: "20px",
        textTransform: "uppercase"
      }}
    >
                        Most Popular
                      </div>}
                    <h3 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 10px" }}>{p.name}</h3>
                    <p style={{ fontSize: "14px", color: "#666", minHeight: "40px" }}>{p.desc}</p>
                    <div style={{ margin: "20px 0" }}>
                      <span style={{ fontSize: "42px", fontWeight: 800, color: "#1f2532" }}>${price}</span>
                      <span style={{ color: "#888", fontSize: "15px" }}> / month</span>
                    </div>

                    <ul className="list-unstyled" style={{ flex: 1, margin: "20px 0", lineHeight: 2.2 }}>
                      {p.features.map((feat, fIdx) => <li key={fIdx} style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
                          <i className="fa fa-check text-primary" style={{ fontSize: "13px" }} />
                          <span>{feat}</span>
                        </li>)}
                    </ul>

                    <div style={{ marginTop: "20px" }}>
                      <Link
      to="/contact"
      className={p.popular ? "thm-btn w-100 text-center" : "btn btn-outline-primary w-100"}
      style={{ padding: "12px", fontWeight: 600, borderRadius: "6px" }}
    >
                        Get Started <span className="icon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>;
  })}
          </div>
        </div>
      </section>
    </div>;
};
