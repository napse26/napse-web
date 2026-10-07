import { PageHeader } from "../components/PageHeader";
export const testimonialsData = [
  {
    id: 1,
    name: "Khalid Al-Mansoor",
    role: "Chief Technology Officer",
    company: "Gulf Tech Group",
    image: "/assets/images/testimonial/testimonial-2-1.jpg",
    text: "NAPSE revamped our entire cloud infrastructure with zero downtime. Their incident response and security consulting give our executive board complete peace of mind."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Director of Operations",
    company: "Nexus Logistics",
    image: "/assets/images/testimonial/testimonial-2-2.jpg",
    text: "The software development team delivered our enterprise portal ahead of schedule. The code quality, documentation, and responsiveness were world-class."
  },
  {
    id: 3,
    name: "Tariq Mahmoud",
    role: "Head of Information Security",
    company: "Apex Financial",
    image: "/assets/images/testimonial/testimonial-2-3.jpg",
    text: "Their proactive endpoint security detected and neutralized suspicious activity before it could impact our financial operations. Highly recommended!"
  },
  {
    id: 4,
    name: "Amira Al-Hashemi",
    role: "VP of Digital Strategy",
    company: "Emirates Retail Holdings",
    image: "/assets/images/testimonial/testimonial-2-1.jpg",
    text: "Partnering with NAPSE cut our cloud overhead by over 30% while dramatically improving application response time for our retail users."
  },
  {
    id: 5,
    name: "Marcus Sterling",
    role: "Managing Partner",
    company: "Sterling & Co Consulting",
    image: "/assets/images/testimonial/testimonial-2-2.jpg",
    text: "From compliance gap analysis to disaster recovery drills, NAPSE behaves as an authentic extension of our internal team."
  },
  {
    id: 6,
    name: "Zaid Al-Qasimi",
    role: "Founder & CEO",
    company: "SmartFlow Systems",
    image: "/assets/images/testimonial/testimonial-2-3.jpg",
    text: "Superb technical competence, swift response times, and exceptional leadership. NAPSE sets the benchmark for IT excellence in the UAE."
  }
];
export const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <PageHeader title="Client Testimonials" currentPage="Testimonials" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">WHAT CLIENTS SAY</span>
            </div>
            <h2 className="section-title__title">
              Trusted by Innovative Companies Across the Region
            </h2>
          </div>

          <div className="row mt-5">
            {testimonialsData.map((t) => (
              <div key={t.id} className="col-lg-4 col-md-6 mb-4">
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
    </div>
  );
};
