import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { blogArticles } from "./Blog";
export const BlogCarousel = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev2) => (prev2 + 1) % blogArticles.length);
  const prev = () => setIndex((prev2) => (prev2 - 1 + blogArticles.length) % blogArticles.length);
  const visible = [
    blogArticles[index % blogArticles.length],
    blogArticles[(index + 1) % blogArticles.length],
    blogArticles[(index + 2) % blogArticles.length]
  ];
  return <div className="blog-carousel-page">
      <PageHeader title="Blog Carousel" currentPage="Blog Carousel" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
            <div className="section-title text-left" style={{ marginBottom: 0 }}>
              <span className="section-title__tagline">INSIGHTS &amp; ANALYSIS</span>
              <h2 className="section-title__title">Featured Technology Articles</h2>
            </div>
            <div className="d-flex gap-2">
              <button
    type="button"
    onClick={prev}
    className="btn btn-outline-primary"
    style={{ width: "45px", height: "45px", borderRadius: "50%" }}
    aria-label="Previous blog slide"
  >
                <i className="fa fa-arrow-left" />
              </button>
              <button
    type="button"
    onClick={next}
    className="btn btn-primary"
    style={{ width: "45px", height: "45px", borderRadius: "50%" }}
    aria-label="Next blog slide"
  >
                <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>

          <div className="row">
            {visible.map((a, i) => <div key={`${a.id}-${i}`} className="col-lg-4 col-md-6 mb-4">
                <div
    style={{
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid #eaeaea",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }}
  >
                  <img src={a.image} alt={a.title} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                  <div style={{ padding: "25px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{ color: "#3D72FC", fontSize: "12px", fontWeight: 700, textTransform: "uppercase" }}>
                      {a.category}
                    </span>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "8px 0", lineHeight: 1.4 }}>
                      <Link to={a.link}>{a.title}</Link>
                    </h3>
                    <p style={{ fontSize: "14px", color: "#666", flex: 1 }}>{a.excerpt}</p>
                    <div style={{ marginTop: "20px" }}>
                      <Link to={a.link} className="thm-btn" style={{ padding: "8px 20px", fontSize: "13px" }}>
                        Read More <span className="icon-right-arrow" />
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
