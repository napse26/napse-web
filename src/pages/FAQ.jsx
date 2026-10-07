import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {
      category: "General IT Solutions",
      q: "What makes NAPSE different from generic IT service providers?",
      a: "We combine local UAE presence in Abu Dhabi with world-class engineering standards. Rather than just offering reactive support, we engineer resilient cloud foundations, proactive threat detection, and custom software that drive tangible growth."
    },
    {
      category: "General IT Solutions",
      q: "Can you work alongside our existing internal IT team?",
      a: "Absolutely. Many of our enterprise engagements are co-managed setups where we handle complex cloud infrastructure, 24/7 SOC telemetry, and compliance audits while your internal team focuses on core day-to-day operations."
    },
    {
      category: "Cyber Security",
      q: "How quickly does your security team respond to an incident?",
      a: "Our Security Operations Center (SOC) operates 24/7/365 with sub-15 minute response SLAs for high-severity alerts and immediate containment measures."
    },
    {
      category: "Cyber Security",
      q: "Do you help organizations meet UAE data residency and GDPR regulations?",
      a: "Yes, we specialize in regional compliance frameworks including the UAE Personal Data Protection Law, National Electronic Security Authority (NESA), and international standards like ISO 27001 and GDPR."
    },
    {
      category: "Cloud & Infrastructure",
      q: "Will migrating to the cloud cause disruptions to our operations?",
      a: "No. We formulate phased, zero-downtime migration plans using parallel replication and incremental cutover testing to ensure uninterrupted service for your clients."
    },
    {
      category: "Software Development",
      q: "What tech stacks do you specialize in for custom development?",
      a: "Our software teams specialize in modern TypeScript, React, Next.js, Node.js, Python, Golang, PostgreSQL, Redis, Docker, and Kubernetes architectures."
    }
  ];
  return <div className="faq-page">
      <PageHeader title="Frequently Asked Questions" currentPage="FAQs" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">ANSWERS &amp; ASSISTANCE</span>
            </div>
            <h2 className="section-title__title">
              Common Questions About Our <span>Services &amp; Workflow</span>
            </h2>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-9">
              <div className="accordion" id="mainFaqAccordion">
                {faqs.map((faq, idx) => <div
    key={idx}
    className="accordion-item mb-3"
    style={{
      border: "1px solid #eaeaea",
      borderRadius: "10px",
      overflow: "hidden"
    }}
  >
                    <h2 className="accordion-header">
                      <button
    className={`accordion-button ${openIndex === idx ? "" : "collapsed"}`}
    type="button"
    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
    style={{
      background: openIndex === idx ? "#f5f8ff" : "#fff",
      color: openIndex === idx ? "#3D72FC" : "#222",
      fontWeight: 600,
      fontSize: "16px",
      padding: "18px 24px"
    }}
  >
                        {faq.q}
                      </button>
                    </h2>
                    {openIndex === idx && <div
    className="accordion-body"
    style={{
      padding: "20px 24px",
      color: "#555",
      lineHeight: 1.8,
      background: "#fff"
    }}
  >
                        <span
    className="badge bg-secondary mb-2"
    style={{ fontSize: "11px", textTransform: "uppercase" }}
  >
                          {faq.category}
                        </span>
                        <p style={{ margin: 0, marginTop: "8px" }}>{faq.a}</p>
                      </div>}
                  </div>)}
              </div>

              <div
    className="text-center p-5 mt-5"
    style={{ background: "#f8f9fa", borderRadius: "12px" }}
  >
                <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>
                  Have a question that is not covered here?
                </h3>
                <p style={{ color: "#666", marginBottom: "20px" }}>
                  Our technical advisors are available to answer your specific architectural queries.
                </p>
                <Link to="/contact" className="thm-btn">
                  Send Your Question <span className="icon-right-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
