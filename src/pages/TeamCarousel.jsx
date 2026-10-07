import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { teamMembers } from "./Team";
export const TeamCarousel = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev2) => (prev2 + 1) % teamMembers.length);
  const prev = () => setIndex((prev2) => (prev2 - 1 + teamMembers.length) % teamMembers.length);
  const visible = [
    teamMembers[index % teamMembers.length],
    teamMembers[(index + 1) % teamMembers.length],
    teamMembers[(index + 2) % teamMembers.length],
    teamMembers[(index + 3) % teamMembers.length]
  ];
  return <div className="team-carousel-page">
      <PageHeader title="Team Showcase" currentPage="Team Carousel" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
            <div className="section-title text-left" style={{ marginBottom: 0 }}>
              <span className="section-title__tagline">LEADERSHIP &amp; ENGINEERING</span>
              <h2 className="section-title__title">Meet Our Key Technical Leads</h2>
            </div>
            <div className="d-flex gap-2">
              <button
    type="button"
    onClick={prev}
    className="btn btn-outline-primary"
    style={{ width: "45px", height: "45px", borderRadius: "50%" }}
    aria-label="Previous team slide"
  >
                <i className="fa fa-arrow-left" />
              </button>
              <button
    type="button"
    onClick={next}
    className="btn btn-primary"
    style={{ width: "45px", height: "45px", borderRadius: "50%" }}
    aria-label="Next team slide"
  >
                <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>

          <div className="row">
            {visible.map((m, i) => <div key={`${m.id}-${i}`} className="col-xl-3 col-md-6 mb-4">
                <div
    style={{
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid #eee"
    }}
  >
                  <img
    src={m.image}
    alt={m.name}
    style={{ width: "100%", height: "280px", objectFit: "cover" }}
  />
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <p style={{ color: "#3D72FC", fontSize: "13px", fontWeight: 600, margin: "0 0 5px" }}>
                      {m.role}
                    </p>
                    <h4 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 12px" }}>
                      <Link to="/team-details">{m.name}</Link>
                    </h4>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
