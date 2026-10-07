import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
export const TeamDetails = () => {
  return <div className="team-details-page">
      <PageHeader
    title="Team Member Profile"
    currentPage="Team Details"
    parentPage={{ name: "Team", link: "/team" }}
  />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #eee" }}>
                <img
    src="/assets/images/team/team-details-img-1.jpg"
    alt="James Carter"
    style={{ width: "100%", height: "auto", display: "block" }}
  />
              </div>
            </div>

            <div className="col-lg-7">
              <div style={{ paddingLeft: "20px" }}>
                <span style={{ color: "#3D72FC", fontWeight: 600, fontSize: "14px" }}>FOUNDER &amp; CEO</span>
                <h2 style={{ fontSize: "32px", fontWeight: 700, margin: "8px 0 20px" }}>James Carter</h2>
                <p style={{ color: "#666", lineHeight: 1.8, fontSize: "15px" }}>
                  With over 15 years in enterprise technology consulting, cloud transformation, and strategic cybersecurity,
                  James has spearheaded major digital overhauls across the GCC region, helping startups and conglomerates alike
                  turn technology into a sustainable competitive moat.
                </p>

                <div className="mt-4 mb-4">
                  <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "15px" }}>Core Competencies</h4>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span style={{ fontWeight: 600, fontSize: "14px" }}>Cloud Architecture &amp; DevOps</span>
                      <span style={{ fontWeight: 600, fontSize: "14px" }}>95%</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div className="progress-bar bg-primary" style={{ width: "95%" }} />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span style={{ fontWeight: 600, fontSize: "14px" }}>Cybersecurity Strategy &amp; SIEM</span>
                      <span style={{ fontWeight: 600, fontSize: "14px" }}>92%</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div className="progress-bar bg-primary" style={{ width: "92%" }} />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span style={{ fontWeight: 600, fontSize: "14px" }}>Enterprise IT Transformation</span>
                      <span style={{ fontWeight: 600, fontSize: "14px" }}>98%</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div className="progress-bar bg-primary" style={{ width: "98%" }} />
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-3 mt-4">
                  <Link to="/contact" className="thm-btn" style={{ padding: "10px 26px", fontSize: "14px" }}>
                    Schedule Discovery Call <span className="icon-right-arrow" />
                  </Link>
                  <a
    href="mailto:cst@napse.ae"
    className="btn btn-outline-secondary"
    style={{ padding: "10px 22px", fontSize: "14px", borderRadius: "5px" }}
  >
                    Direct Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
