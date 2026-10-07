import { PageHeader } from "../components/PageHeader";
export const Gallery = () => {
  const galleryImages = [
    { src: "/assets/images/gallery/gallery-page-1-1.jpg", title: "Data Center Engineering" },
    { src: "/assets/images/gallery/gallery-page-1-2.jpg", title: "Security Operations Center" },
    { src: "/assets/images/gallery/gallery-page-1-3.jpg", title: "Cloud Infrastructure Lab" },
    { src: "/assets/images/gallery/gallery-page-1-4.jpg", title: "Enterprise Development Team" },
    { src: "/assets/images/gallery/gallery-page-1-5.jpg", title: "Hardware Diagnostics Bench" },
    { src: "/assets/images/gallery/gallery-page-1-6.jpg", title: "Abu Dhabi Technical Summit" },
    { src: "/assets/images/gallery/gallery-page-1-7.jpg", title: "Network Operations Room" },
    { src: "/assets/images/gallery/gallery-page-1-8.jpg", title: "Incident Response Workshop" },
    { src: "/assets/images/gallery/gallery-page-1-9.jpg", title: "Systems Architecture Session" }
  ];
  return <div className="gallery-page">
      <PageHeader title="Photo & Project Gallery" currentPage="Gallery" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">MOMENTS &amp; FACILITIES</span>
            </div>
            <h2 className="section-title__title">Our Labs, Infrastructure &amp; Events</h2>
          </div>

          <div className="row mt-5">
            {galleryImages.map((img, i) => <div key={i} className="col-lg-4 col-md-6 mb-4">
                <div
    style={{
      borderRadius: "12px",
      overflow: "hidden",
      position: "relative",
      height: "280px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
    }}
  >
                  <img
    src={img.src}
    alt={img.title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s"
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
  />
                  <div
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "15px 20px",
      background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
      color: "#fff"
    }}
  >
                    <h5 style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>{img.title}</h5>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
