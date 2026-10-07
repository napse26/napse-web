import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ServiceSidebar } from "../components/ServiceSidebar";
export const AdvancedTechnology = () => {
  return <div className="service-details-page">
      <PageHeader
    title="Advanced Technology & Software"
    currentPage="Advanced Technology"
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
                  Custom Enterprise Software, Web Applications &amp; AI Integration
                </h3>
                <div className="services-details__bdr" />
                <p className="services-details__text-1">
                  Off-the-shelf software often fails to support unique business models. NAPSE engineers custom
                  software solutions built for high concurrency, flawless security, and effortless user adoption.
                </p>
                <p className="services-details__text-2">
                  From scalable multi-tenant SaaS architectures to responsive mobile applications and AI-augmented
                  decision support systems, we deliver clean, documented, and production-tested codebases.
                </p>

                <div className="services-details__img-1 my-4">
                  <img
    src="/assets/images/services/services-details-img-5.jpg"
    alt="Advanced Technology"
    style={{ width: "100%", borderRadius: "12px" }}
  />
                </div>

                <h4 className="services-details__title-2">Engineering Capabilities</h4>
                <div className="row my-4">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Full-Stack Web &amp; Mobile App Engineering</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Microservices &amp; High-Throughput REST/GraphQL APIs</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Enterprise Database Architecture &amp; Index Optimization</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Intelligent Machine Learning &amp; AI Feature Integration</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 mt-4" style={{ background: "#f8f9fa", borderRadius: "12px", borderLeft: "4px solid var(--techguru-base)" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: 700 }}>Bring Your Vision to Life</h4>
                  <p style={{ fontSize: "14px", color: "#666", margin: "8px 0 15px" }}>
                    Speak with our software leads to scope timelines, architecture, and technology selections.
                  </p>
                  <Link to="/contact" className="thm-btn" style={{ padding: "8px 24px", fontSize: "14px" }}>
                    Start Your Project <span className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
