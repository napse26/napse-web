import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { ServiceSidebar } from "../components/ServiceSidebar";
export const EndpointSecurity = () => {
  return <div className="service-details-page">
      <PageHeader
    title="Endpoint & Device Security"
    currentPage="Endpoint Security"
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
                  Unified Endpoint Management &amp; Hardware Perimeter Defense
                </h3>
                <div className="services-details__bdr" />
                <p className="services-details__text-1">
                  With hybrid and remote work environments becoming permanent, securing every mobile phone,
                  laptop, workstation, and IoT device connected to corporate assets is essential.
                </p>
                <p className="services-details__text-2">
                  NAPSE implements zero-trust endpoint detection and response (EDR), remote device wiping,
                  hard drive encryption management, and automated firmware patching to insulate your perimeter.
                </p>

                <div className="services-details__img-1 my-4">
                  <img
    src="/assets/images/services/services-details-img-2.jpg"
    alt="Endpoint Security"
    style={{ width: "100%", borderRadius: "12px" }}
  />
                </div>

                <h4 className="services-details__title-2">Endpoint Security Features</h4>
                <div className="row my-4">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Automated OS &amp; Application Patch Management</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>BitLocker &amp; FileVault Encryption Governance</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Remote Kill-Switch &amp; Lost Device Wiping</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-tick-inside-circle text-primary fs-5 mt-1" />
                      <p style={{ margin: 0 }}>Mobile Device Management (MDM) for iOS &amp; Android</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 mt-4" style={{ background: "#f8f9fa", borderRadius: "12px", borderLeft: "4px solid var(--techguru-base)" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: 700 }}>Protect Your Workforce Devices</h4>
                  <p style={{ fontSize: "14px", color: "#666", margin: "8px 0 15px" }}>
                    Speak with our IT engineers to roll out enterprise EDR and mobile management across your organization.
                  </p>
                  <Link to="/contact" className="thm-btn" style={{ padding: "8px 24px", fontSize: "14px" }}>
                    Get Free Quote <span className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
