import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ServiceSidebar } from "../components/ServiceSidebar";
export const SmartItEfficiency = () => {
  return <div className="service-details-page">
      <PageHeader
    title="Smart IT Efficiency"
    currentPage="Smart IT Efficiency"
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
                  Intelligent Process Automation, Modernization &amp; Operational Agility
                </h3>
                <div className="services-details__bdr" />
                <p className="services-details__text-1">
                  Siloed enterprise tools and manual repetitive tasks cost organizations thousands of hours every quarter.
                  Smart IT Efficiency leverages modern workflow automation, ERP integrations, and software robotics to streamline operations.
                </p>
                <p className="services-details__text-2">
                  Our systems engineers evaluate existing bottlenecks, re-architect data pipelines, and deploy automated bridges
                  that connect customer service, logistics, finance, and technical departments.
                </p>

                <div className="services-details__img-1 my-4">
                  <img
    src="/assets/images/services/services-details-img-4.jpg"
    alt="Smart IT Efficiency"
    style={{ width: "100%", borderRadius: "12px" }}
  />
                </div>

                <h4 className="services-details__title-2">Automation &amp; Efficiency Focus Areas</h4>
                <div className="row my-4">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Business Process Automation &amp; RPA</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Legacy System Refactoring &amp; Cloud Bridging</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Real-Time Executive Dashboards &amp; Analytics</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Cross-Platform API &amp; Webhook Orchestration</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 mt-4" style={{ background: "#f8f9fa", borderRadius: "12px", borderLeft: "4px solid var(--techguru-base)" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: 700 }}>Streamline Your Business Today</h4>
                  <p style={{ fontSize: "14px", color: "#666", margin: "8px 0 15px" }}>
                    Connect with our solution architects to eliminate manual bottlenecks across your operations.
                  </p>
                  <Link to="/contact" className="thm-btn" style={{ padding: "8px 24px", fontSize: "14px" }}>
                    Consult an Architect <span className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
