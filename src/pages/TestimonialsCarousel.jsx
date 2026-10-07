import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { testimonialsData } from "./Testimonials";
export const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev2) => (prev2 + 1) % testimonialsData.length);
  const prev = () => setIndex((prev2) => (prev2 - 1 + testimonialsData.length) % testimonialsData.length);
  const visible = [
    testimonialsData[index % testimonialsData.length],
    testimonialsData[(index + 1) % testimonialsData.length],
    testimonialsData[(index + 2) % testimonialsData.length]
  ];
  return <div className="testimonials-carousel-page">
      <PageHeader title="Client Reviews Carousel" currentPage="Testimonials Carousel" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
            <div className="section-title text-left" style={{ marginBottom: 0 }}>
              <span className="section-title__tagline">CLIENT SATISFACTION</span>
              <h2 className="section-title__title">Verified Industry Testimonials</h2>
            </div>
            <div className="d-flex gap-2">
              <button
    type="button"
    onClick={prev}
    className="btn btn-outline-primary"
    style={{ width: "45px", height: "45px", borderRadius: "50%" }}
    aria-label="Previous testimonial slide"
  >
                <i className="fa fa-arrow-left" />
              </button>
              <button
    type="button"
    onClick={next}
    className="btn btn-primary"
    style={{ width: "45px", height: "45px", borderRadius: "50%" }}
    aria-label="Next testimonial slide"
  >
                <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>

          <div className="row">
            {visible.map((t, i) => (
              <div key={`${t.id}-${i}`} className="col-lg-4 col-md-6 mb-4">
                <div className="testimonial-two__single">
                  <div className="testimonial-two__single-inner">
                    <div className="testimonial-two__star">
                      <span className="icon-star-icon" />
                      <span className="icon-star-icon" />
                      <span className="icon-star-icon" />
                      <span className="icon-star-icon" />
                      <span className="icon-star-icon" />
                    </div>
                    <p className="testimonial-two__text">
                      "{t.text}"
                    </p>
                  </div>
                  <div className="testimonial-two__client-info">
                    <div className="testimonial-two__client-img">
                      <img src={t.image} alt={t.name} />
                    </div>
                    <div className="testimonial-two__client-content">
                      <h4 className="testimonial-two__client-name">
                        <a href="#testimonial">{t.name}</a>
                      </h4>
                      <p className="testimonial-two__sub-title">{t.role}, {t.company}</p>
                    </div>
                  </div>
                  <div className="testimonial-two__quote">
                    <span className="icon-quote" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>;
};
