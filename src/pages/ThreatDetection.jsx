import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ServiceSidebar } from "../components/ServiceSidebar";
export const ThreatDetection = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const faqs = [
    {
      q: "How does real-time threat detection work?",
      a: "We deploy behavioral heuristics and machine-learning telemetry across network endpoints to identify anomalous payloads, lateral movement, and zero-day intrusion attempts before data exfiltration occurs."
    },
    {
      q: "What is the standard response time during an incident?",
      a: "Our Security Operations Center (SOC) operates 24/7/365 with a sub-15-minute SLA for critical severity security incidents."
    },
    {
      q: "Can this integrate with our existing firewalls and cloud accounts?",
      a: "Yes, our threat detection platform integrates seamlessly with AWS, Microsoft Azure, Google Cloud, Cisco, Fortinet, and Palo Alto Networks."
    }
  ];
  return <div className="service-details-page">
      <PageHeader
    title="Threat Detection & Prevention"
    currentPage="Threat Detection"
    parentPage={{ name: "Services", link: "/services" }}
  />

      <section className="services-details" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <ServiceSidebar />
            </div>

            <div className="col-xl-8 col-lg-7">
              <div className="services-details__right">
                <h3 className="services-details__title-1">
                  Proactive Enterprise Threat Hunting &amp; Intrusion Prevention
                </h3>
                <div className="services-details__bdr" />
                <p className="services-details__text-1">
                  Modern cyber threats require proactive defense beyond traditional antivirus software.
                  NAPSE delivers continuous 24/7 telemetry monitoring, automated security information and event management (SIEM),
                  and rapid remediation protocols.
                </p>
                <p className="services-details__text-2">
                  Our cyber security analysts safeguard corporate networks, cloud environments, and sensitive client repositories
                  against ransomware, phishing campaigns, zero-day vulnerabilities, and credential stuffing attacks.
                </p>

                <div className="services-details__img-1 my-4">
                  <img
    src="/assets/images/services/services-details-img-1.jpg"
    alt="Threat Detection"
    style={{ width: "100%", borderRadius: "12px" }}
  />
                </div>

                <h4 className="services-details__title-2">Key Service Capabilities</h4>
                <p className="services-details__text-3">
                  Our comprehensive cybersecurity package covers continuous surveillance, proactive vulnerability assessments,
                  and rapid automated containment.
                </p>

                <div className="services-details__points-box my-4">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start gap-2">
                        <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                        <p style={{ margin: 0, fontSize: "15px" }}>
                          24/7 Continuous SIEM &amp; SOC Telemetry Monitoring
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start gap-2">
                        <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                        <p style={{ margin: 0, fontSize: "15px" }}>
                          Behavioral Anomaly &amp; Zero-Day Exploit Defense
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start gap-2">
                        <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                        <p style={{ margin: 0, fontSize: "15px" }}>
                          Automated Quarantine &amp; Lateral Movement Blockers
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-start gap-2">
                        <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                        <p style={{ margin: 0, fontSize: "15px" }}>
                          Regular Penetration Testing &amp; Compliance Auditing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {
    /* FAQ Accordion */
  }
                <h4 className="mt-5 mb-3" style={{ fontSize: "22px", fontWeight: 700 }}>
                  Frequently Asked Questions
                </h4>
                <div className="accordion mb-5" id="faqAccordion">
                  {faqs.map((faq, idx) => <div
    key={idx}
    className="accordion-item mb-2"
    style={{ border: "1px solid #e0e0e0", borderRadius: "8px", overflow: "hidden" }}
  >
                      <h2 className="accordion-header">
                        <button
    className={`accordion-button ${activeFaq === idx ? "" : "collapsed"}`}
    type="button"
    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
    style={{
      background: activeFaq === idx ? "#f0f5ff" : "#fff",
      color: activeFaq === idx ? "#3D72FC" : "#333",
      fontWeight: 600
    }}
  >
                          {faq.q}
                        </button>
                      </h2>
                      {activeFaq === idx && <div className="accordion-body" style={{ padding: "20px", color: "#666", lineHeight: 1.7 }}>
                          {faq.a}
                        </div>}
                    </div>)}
                </div>

                <div className="p-4" style={{ background: "#f8f9fa", borderRadius: "12px", borderLeft: "4px solid var(--techguru-base)" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: 700 }}>Need an urgent security assessment?</h4>
                  <p style={{ fontSize: "14px", color: "#666", margin: "8px 0 15px" }}>
                    Speak with our security incident engineers in Abu Dhabi for immediate triage and guidance.
                  </p>
                  <Link to="/contact" className="thm-btn" style={{ padding: "8px 24px", fontSize: "14px" }}>
                    Contact Security Team <span className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
