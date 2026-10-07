import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ServiceSidebar } from "../components/ServiceSidebar";
export const DataProtectionPrivacy = () => {
  return <div className="service-details-page">
      <PageHeader
    title="Data Protection & Privacy"
    currentPage="Data Protection"
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
                  Enterprise Data Governance, Privacy Compliance &amp; Cryptographic Protection
                </h3>
                <div className="services-details__bdr" />
                <p className="services-details__text-1">
                  National and international data protection laws (including UAE Personal Data Protection Law,
                  GDPR, and ISO 27001) mandate rigorous controls over how sensitive records are handled and stored.
                </p>
                <p className="services-details__text-2">
                  NAPSE assists organizations with comprehensive data classification, access control enforcement,
                  homomorphic and AES-256 encryption-at-rest implementations, and automated retention lifecycle policies.
                </p>

                <div className="services-details__img-1 my-4">
                  <img
    src="/assets/images/services/services-details-img-1.jpg"
    alt="Data Protection"
    style={{ width: "100%", borderRadius: "12px" }}
  />
                </div>

                <h4 className="services-details__title-2">Compliance &amp; Governance Pillars</h4>
                <div className="row my-4">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>UAE &amp; GCC Data Sovereignty &amp; Residency Compliance</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Role-Based Access Control (RBAC) &amp; Least Privilege</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>End-to-End Encryption in Transit &amp; at Rest</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Data Loss Prevention (DLP) &amp; Breach Auditing</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 mt-4" style={{ background: "#f8f9fa", borderRadius: "12px", borderLeft: "4px solid var(--techguru-base)" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: 700 }}>Achieve Full Regulatory Compliance</h4>
                  <p style={{ fontSize: "14px", color: "#666", margin: "8px 0 15px" }}>
                    Schedule a compliance readiness audit with our certified data governance officers.
                  </p>
                  <Link to="/contact" className="thm-btn" style={{ padding: "8px 24px", fontSize: "14px" }}>
                    Audit My Infrastructure <span className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
