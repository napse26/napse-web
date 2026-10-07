import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ServiceSidebar } from "../components/ServiceSidebar";
export const CloudManagedServices = () => {
  return <div className="service-details-page">
      <PageHeader
    title="Cloud Managed Services"
    currentPage="Cloud Managed Services"
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
                  High-Availability Cloud Architecture, Migration &amp; 24/7 DevOps
                </h3>
                <div className="services-details__bdr" />
                <p className="services-details__text-1">
                  Modern cloud computing provides unmatched scalability, but managing multi-cloud resources,
                  controlling consumption costs, and upholding security require seasoned engineering.
                </p>
                <p className="services-details__text-2">
                  NAPSE provides complete cloud lifecycle management across AWS, Microsoft Azure, and Google Cloud Platform,
                  including Kubernetes orchestration, CI/CD automated deployments, and round-the-clock infrastructure telemetry.
                </p>

                <div className="services-details__img-1 my-4">
                  <img
    src="/assets/images/services/services-details-img-3.jpg"
    alt="Cloud Services"
    style={{ width: "100%", borderRadius: "12px" }}
  />
                </div>

                <h4 className="services-details__title-2">Core Cloud Solutions</h4>
                <div className="row my-4">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Zero-Downtime Cloud Migration &amp; Architecture</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Automated Multi-Region Scaling &amp; Load Balancing</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Cloud Cost Optimization &amp; Resource Right-Sizing</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Kubernetes, Docker Containers &amp; Microservices</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 mt-4" style={{ background: "#f8f9fa", borderRadius: "12px", borderLeft: "4px solid var(--techguru-base)" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: 700 }}>Optimize Your Cloud Spend Today</h4>
                  <p style={{ fontSize: "14px", color: "#666", margin: "8px 0 15px" }}>
                    Request a complimentary cloud architecture and cost audit with our certified engineers.
                  </p>
                  <Link to="/contact" className="thm-btn" style={{ padding: "8px 24px", fontSize: "14px" }}>
                    Request Cloud Review <span className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
