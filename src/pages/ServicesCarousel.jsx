import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { servicesData } from "./Services";
export const ServicesCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % servicesData.length);
  };
  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };
  const visibleServices = [
    servicesData[startIndex % servicesData.length],
    servicesData[(startIndex + 1) % servicesData.length],
    servicesData[(startIndex + 2) % servicesData.length]
  ];
  return <div className="services-carousel-page">
      <PageHeader title="Services Showcase" currentPage="Services Carousel" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
            <div className="section-title text-left" style={{ marginBottom: 0 }}>
              <span className="section-title__tagline">FEATURED CAPABILITIES</span>
              <h2 className="section-title__title">Explore Our Technology Solutions</h2>
            </div>
            <div className="d-flex gap-2">
              <button
    type="button"
    onClick={prevSlide}
    className="btn btn-outline-primary"
    style={{ width: "45px", height: "45px", borderRadius: "50%" }}
    aria-label="Previous services slide"
  >
                <i className="fa fa-arrow-left" />
              </button>
              <button
    type="button"
    onClick={nextSlide}
    className="btn btn-primary"
    style={{ width: "45px", height: "45px", borderRadius: "50%" }}
    aria-label="Next services slide"
  >
                <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>

          <div className="row">
            {visibleServices.map((svc, i) => <div key={`${svc.id}-${i}`} className="col-xl-4 col-md-6 mb-4">
                <div
    style={{
      border: "1px solid #eaeaea",
      borderRadius: "12px",
      overflow: "hidden",
      background: "#fff",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }}
  >
                  <img
    src={svc.image}
    alt={svc.title}
    style={{ width: "100%", height: "220px", objectFit: "cover" }}
  />
                  <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: "32px", color: "var(--techguru-base)", marginBottom: "15px" }}>
                      <span className={svc.icon} />
                    </div>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>
                      <Link to={svc.path}>{svc.title}</Link>
                    </h3>
                    <p style={{ fontSize: "14px", color: "#666", flex: 1 }}>{svc.desc}</p>
                    <div style={{ marginTop: "20px" }}>
                      <Link to={svc.path} className="thm-btn" style={{ padding: "8px 22px", fontSize: "13px" }}>
                        Explore Service <span className="icon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
