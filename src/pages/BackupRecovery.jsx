import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ServiceSidebar } from "../components/ServiceSidebar";
export const BackupRecovery = () => {
  return <div className="service-details-page">
      <PageHeader
    title="Backup & Disaster Recovery"
    currentPage="Backup & Recovery"
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
                  Immutable Cloud Backups, Failover Testing &amp; Business Continuity
                </h3>
                <div className="services-details__bdr" />
                <p className="services-details__text-1">
                  Data loss from hardware failures, cyber extortion, or accidental deletions can cripple an organization.
                  NAPSE builds resilient 3-2-1 backup strategies with air-gapped immutable cloud storage.
                </p>
                <p className="services-details__text-2">
                  We guarantee industry-leading Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO),
                  conducting regular automated drill tests to verify that full database recovery works seamlessly under pressure.
                </p>

                <div className="services-details__img-1 my-4">
                  <img
    src="/assets/images/services/services-details-img-6.jpg"
    alt="Backup & Recovery"
    style={{ width: "100%", borderRadius: "12px" }}
  />
                </div>

                <h4 className="services-details__title-2">Disaster Recovery Highlights</h4>
                <div className="row my-4">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Automated Hourly Snapshots with End-to-End Encryption</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Air-Gapped Ransomware-Proof Immutable Storage</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Instant Virtual Machine Hot-Standby Failover</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Scheduled Disaster Simulation &amp; Compliance Audits</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 mt-4" style={{ background: "#f8f9fa", borderRadius: "12px", borderLeft: "4px solid var(--techguru-base)" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: 700 }}>Ensure Zero Data Loss</h4>
                  <p style={{ fontSize: "14px", color: "#666", margin: "8px 0 15px" }}>
                    Protect your enterprise records with automated, immutable offsite backups.
                  </p>
                  <Link to="/contact" className="thm-btn" style={{ padding: "8px 24px", fontSize: "14px" }}>
                    Setup Disaster Plan <span className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
