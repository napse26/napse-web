import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      bg: "/assets/images/backgrounds/slider-2-1.jpg",
      image: "/assets/images/resources/main-slider-img-1.png",
      subTitle: "IT Solutions Designed for Your Success",
      title: (
        <>
          NAPSE - Smart<br />
          <span>Solutions</span> for a<br />
          Connected World
        </>
      ),
      text: "From strategic IT consulting to seamless implementation, we deliver tailored solutions that drive efficiency."
    },
    {
      bg: "/assets/images/backgrounds/slider-2-2.jpg",
      image: "/assets/images/resources/main-slider-img-2.png",
      subTitle: "Empowering Digital Transformation",
      title: (
        <>
          Next-Gen IT &amp;<br />
          <span>Cyber</span> Security<br />
          Architecture
        </>
      ),
      text: "Protecting your digital assets and optimizing infrastructure for continuous business reliability."
    },
    {
      bg: "/assets/images/backgrounds/slider-2-3.jpg",
      image: "/assets/images/resources/main-slider-img-1.png",
      subTitle: "Scalable Software Engineering",
      title: (
        <>
          Custom Software<br />
          <span>Engineered</span> for<br />
          High Performance
        </>
      ),
      text: "Modern web, mobile, and cloud software developed with precision to scale your operations."
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7e3);
    return () => clearInterval(timer);
  }, [slides.length]);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const homeTestimonials = [
    {
      id: 1,
      name: "Khalid Al-Mansoor",
      role: "CTO, Gulf Tech Group",
      image: "/assets/images/testimonial/testimonial-2-1.jpg",
      text: "NAPSE revamped our entire cloud infrastructure with zero downtime. Their incident response and security consulting give our executive board complete peace of mind."
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Director of Operations",
      image: "/assets/images/testimonial/testimonial-2-2.jpg",
      text: "The software development team delivered our enterprise portal ahead of schedule. The code quality, documentation, and responsiveness were world-class."
    },
    {
      id: 3,
      name: "Tariq Mahmoud",
      role: "Head of Information Security",
      image: "/assets/images/testimonial/testimonial-2-3.jpg",
      text: "Their proactive endpoint security detected and neutralized suspicious activity before it could impact our financial operations. Highly recommended!"
    },
    {
      id: 4,
      name: "Amira Al-Hashemi",
      role: "VP of Digital Strategy",
      image: "/assets/images/testimonial/testimonial-2-1.jpg",
      text: "Partnering with NAPSE cut our cloud overhead by over 30% while dramatically improving application response time for our retail users."
    },
    {
      id: 5,
      name: "Marcus Sterling",
      role: "Managing Partner",
      image: "/assets/images/testimonial/testimonial-2-2.jpg",
      text: "From compliance gap analysis to disaster recovery drills, NAPSE behaves as an authentic extension of our internal team."
    },
    {
      id: 6,
      name: "Zaid Al-Qasimi",
      role: "Founder & CEO",
      image: "/assets/images/testimonial/testimonial-2-3.jpg",
      text: "Superb technical competence, swift response times, and exceptional leadership. NAPSE sets the benchmark for IT excellence in the UAE."
    }
  ];
  useEffect(() => {
    const tTimer = setInterval(() => {
      setTestimonialPage((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(tTimer);
  }, []);
  const [activePortfolioIndex, setActivePortfolioIndex] = useState(0);
  const portfolioItemsTwo = [
    {
      id: 1,
      title: "Enterprise Cyber Security Shield",
      category: "Cyber Security",
      image: "/assets/images/project/portfolio-2-1.jpg",
      link: "/portfolio-details"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Migration",
      category: "Cloud Solutions",
      image: "/assets/images/project/portfolio-2-2.jpg",
      link: "/portfolio-details"
    },
    {
      id: 3,
      title: "High-Performance Web Portal",
      category: "Web Development",
      image: "/assets/images/project/portfolio-2-3.jpg",
      link: "/portfolio-details"
    },
    {
      id: 4,
      title: "Automated DevOps CI/CD Pipeline",
      category: "Cloud Solutions",
      image: "/assets/images/project/portfolio-2-4.jpg",
      link: "/portfolio-details"
    }
  ];
  const [activeFilter, setActiveFilter] = useState("all");
  const portfolioItems = [
    {
      id: 1,
      title: "Enterprise Cyber Security Shield",
      category: "security",
      categoryLabel: "Cyber Security",
      image: "/assets/images/project/portfolio-1-1.jpg",
      link: "/portfolio-details"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Migration",
      category: "cloud",
      categoryLabel: "Cloud Solutions",
      image: "/assets/images/project/portfolio-1-2.jpg",
      link: "/portfolio-details"
    },
    {
      id: 3,
      title: "High-Performance Web Portal",
      category: "web",
      categoryLabel: "Web Development",
      image: "/assets/images/project/portfolio-1-3.jpg",
      link: "/portfolio-details"
    },
    {
      id: 4,
      title: "Disaster Recovery & Backup",
      category: "it",
      categoryLabel: "IT Solution",
      image: "/assets/images/project/portfolio-1-4.jpg",
      link: "/portfolio-details"
    },
    {
      id: 5,
      title: "Zero Trust Network Architecture",
      category: "security",
      categoryLabel: "Cyber Security",
      image: "/assets/images/project/portfolio-1-5.jpg",
      link: "/portfolio-details"
    },
    {
      id: 6,
      title: "Automated DevOps CI/CD Pipeline",
      category: "cloud",
      categoryLabel: "Cloud Solutions",
      image: "/assets/images/project/portfolio-1-6.jpg",
      link: "/portfolio-details"
    }
  ];
  const filteredPortfolio = activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: ""
  });
  const [contactStatus, setContactStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setContactStatus({ type: "idle", message: "" });
    try {
      const res = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setContactStatus({
        type: "success",
        message: data.message || "Thank you! Your message has been sent successfully."
      });
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    } catch {
      setContactStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully."
      });
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="home-page-wrapper">
      {/* Hero Slider Section */}
      <section className="main-slider-two">
        <div className="swiper-container thm-swiper__slider" style={{ position: "relative", minHeight: "670px" }}>
          <div className="swiper-wrapper" style={{ position: "relative", width: "100%", minHeight: "670px" }}>
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={index}
                  className={`swiper-slide ${isActive ? "swiper-slide-active" : ""}`}
                  style={{
                    position: index === 0 ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: isActive ? 1 : 0,
                    visibility: isActive ? "visible" : "hidden",
                    pointerEvents: isActive ? "auto" : "none",
                    transition: "opacity 1000ms ease-in-out, visibility 1000ms ease-in-out",
                    zIndex: isActive ? 5 : 1,
                    backgroundColor: "transparent"
                  }}
                >
                  <div
                    className="main-slider-two__bg"
                    style={{
                      backgroundImage: `url(${slide.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center right",
                      backgroundRepeat: "no-repeat",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 1
                    }}
                  />

                  <ul className="list-unstyled main-slider-two__menu">
                    <li><Link to="/about">Help</Link></li>
                    <li><Link to="/contact">Support</Link></li>
                    <li><Link to="/faq">Faqs</Link></li>
                  </ul>

                  <div className="main-slider-two__social-box">
                    <h4 className="main-slider-two__social-title">Follow Us:</h4>
                    <div className="main-slider-two__social-box-inner">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><span className="icon-facebook" /></a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin" /></a>
                    </div>
                  </div>

                  <div className="main-slider-two__shape-1" />
                  <div className="main-slider-two__shape-2 float-bob-x">
                    <img src="/assets/images/shapes/main-slider-two-shape-2.png" alt="" />
                  </div>
                  <div className="main-slider-two__shape-3 float-bob-y">
                    <img src="/assets/images/shapes/main-slider-two-shape-3.png" alt="" />
                  </div>

                  <div className="container" style={{ position: "relative", zIndex: 10 }}>
                    <div className="row">
                      <div className="col-xl-8 col-lg-8">
                        <div className="main-slider-two__content">
                          <div className="main-slider-two__sub-title-box">
                            <div className="main-slider-two__sub-title-icon">
                              <img src="/assets/images/icon/main-slider-sub-title-icon.png" alt="" />
                            </div>
                            <p className="main-slider-two__sub-title">{slide.subTitle}</p>
                          </div>

                          <h2 className="main-slider-two__title">
                            {slide.title}
                          </h2>

                          <p className="main-slider-two__text">
                            {slide.text}
                          </p>

                          <div className="main-slider-two__btns-box">
                            <div className="main-slider-two__btn-box-1">
                              <Link to="/contact" className="thm-btn">
                                Get Started<span className="icon-right-arrow" />
                              </Link>
                            </div>
                            <div className="main-slider-two__btn-box-2">
                              <Link to="/about" className="thm-btn">
                                Read More<span className="icon-right-arrow" />
                              </Link>
                            </div>
                          </div>

                          <div className="main-slider-two__shield-check-icon">
                            <img src="/assets/images/icon/main-slider-shield-check-icon.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Arrows */}
          <div className="main-slider-two__nav">
            <div
              className="swiper-button-prev"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              role="button"
              aria-label="Previous slide"
              style={{ cursor: "pointer" }}
            >
              <i className="icon-right-arrow" />
            </div>
            <div
              className="swiper-button-next"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              role="button"
              aria-label="Next slide"
              style={{ cursor: "pointer" }}
            >
              <i className="icon-right-arrow" />
            </div>
          </div>

          {/* Slider navigation dots */}
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 35,
              display: "flex",
              gap: "10px"
            }}
          >
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: idx === currentSlide ? "28px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  backgroundColor: idx === currentSlide ? "var(--techguru-base)" : "rgba(255,255,255,0.4)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-two">
        <div className="about-two__shape-2" />
        <div className="about-two__shape-3">
          <img src="/assets/images/shapes/about-two-shape-3.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-two__left">
                <div className="about-two__img-box">
                  <div className="about-two__img">
                    <img src="/assets/images/resources/about-two-img-1.jpg" alt="About NAPSE" />
                  </div>
                  <div className="about-two__img-2">
                    <img src="/assets/images/resources/about-two-img-2.jpg" alt="About Team" />
                  </div>
                  <div className="about-two__shape-1" />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="about-two__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline-shape-1" />
                    <span className="section-title__tagline-shape-2" />
                    <span className="section-title__tagline">About Us</span>
                    <span className="section-title__tagline-shape-2" />
                    <span className="section-title__tagline-shape-1" />
                  </div>
                  <h2 className="section-title__title">
                    Powering Businesses With{" "}
                    <span>Reliable IT Solutions</span>
                  </h2>
                  <p style={{ color: "#5CB0E9", fontSize: "15px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginTop: "10px", marginBottom: "14px" }}>
                    Technology That Works For Your Business
                  </p>
                </div>
                <p
                  className="about-two__text-1"
                  style={{
                    fontFamily: "var(--techguru-font)",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "var(--techguru-gray)",
                    marginBottom: "14px"
                  }}
                >
                  <strong style={{ color: "#fff" }}>NAPSE</strong> is a UAE-based IT solutions and technology services company delivering reliable, scalable, and cost-effective solutions for businesses across industries.
                </p>
                <p
                  className="about-two__text-1"
                  style={{
                    fontFamily: "var(--techguru-font)",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "var(--techguru-gray)",
                    marginBottom: "20px"
                  }}
                >
                  From IT hardware and infrastructure to cloud, cybersecurity, networking, software licensing, and enterprise technologies, we help businesses build and manage the technology they need to grow.
                </p>

                {/* Single dashed divider */}
                <div style={{ borderTop: "1px dashed rgba(255, 255, 255, 0.15)", margin: "22px 0" }} />

                {/* 4 Checklist Offerings */}
                <div className="about-two__points-box" style={{ marginBottom: "20px" }}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          Reliable hardware, networking, and infrastructure solutions tailored to your business.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          Scalable cloud and enterprise technologies designed for modern businesses.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          Secure, connected, and resilient IT environments that protect your business.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          Genuine software licensing and end-to-end technology services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Single dashed divider */}
                <div style={{ borderTop: "1px dashed rgba(255, 255, 255, 0.15)", margin: "22px 0" }} />

                {/* 2 Strategic Pillars */}
                <div style={{ marginBottom: "26px" }}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="3.5" fill="var(--techguru-base)" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          From sourcing IT equipment to implementing complete infrastructure solutions, we support your technology requirements end-to-end.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--techguru-base)" strokeWidth="2.4" style={{ flexShrink: 0, marginTop: "3px" }}>
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="3.5" fill="var(--techguru-base)" />
                        </svg>
                        <p style={{ fontFamily: "var(--techguru-font)", fontSize: "16px", color: "var(--techguru-gray)", lineHeight: "26px", margin: 0 }}>
                          We understand your business requirements and deliver practical, efficient solutions aligned with your technology goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="about-two__experience-contact-and-btn"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    gap: "16px"
                  }}
                >
                  <div className="about-two__experience-box" style={{ margin: 0, flexShrink: 0 }}>
                    <div className="about-two__experience-count-box">
                      <h3 style={{ color: "var(--techguru-base)", fontSize: "36px", fontWeight: "700", lineHeight: "1", margin: 0 }}>25</h3>
                      <span style={{ color: "var(--techguru-base)", fontSize: "36px", fontWeight: "700", lineHeight: "1", margin: 0 }}>+</span>
                    </div>
                    <p className="about-two__experience-text" style={{ fontSize: "12px", color: "var(--techguru-white)", lineHeight: "16px", margin: 0, marginLeft: "8px" }}>
                      Years of <br /> Experience
                    </p>
                  </div>

                  <div
                    className="about-two__divider"
                    style={{
                      width: "1px",
                      height: "34px",
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      flexShrink: 0
                    }}
                  />

                  <div className="about-two__call-box" style={{ margin: 0, flexShrink: 0, display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className="about-two__call-icon" style={{ flexShrink: 0 }}>
                      <span className="icon-customer-service-headset" />
                    </div>
                    <div className="about-two__call-content">
                      <span style={{ fontSize: "12px", color: "#5CB0E9", fontWeight: "600", display: "block" }}>Call Us For Inquiry</span>
                      <p style={{ margin: 0, lineHeight: "1.2" }}><a href="tel:971521475975" style={{ fontSize: "16px", fontWeight: "700", whiteSpace: "nowrap", color: "#fff" }}>+971 52 147 5975</a></p>
                    </div>
                  </div>

                  <div
                    className="about-two__divider"
                    style={{
                      width: "1px",
                      height: "34px",
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      flexShrink: 0
                    }}
                  />

                  <div className="about-two__btn-box" style={{ margin: 0, flexShrink: 0 }}>
                    <Link to="/about" className="thm-btn" style={{ padding: "12px 22px", fontSize: "14px", whiteSpace: "nowrap", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                      Learn More <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counters Section */}
      <section className="counter-two">
        <div
          className="counter-two__bg-shape"
          style={{ backgroundImage: "url(/assets/images/shapes/counter-two-bg-shape.png)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 mb-4 mb-xl-0">
              <div className="counter-two__single">
                <div className="counter-two__icon-inner">
                  <div className="counter-two__icon">
                    <span className="icon-folder" />
                  </div>
                </div>
                <div className="counter-two__content">
                  <div className="counter-two__count-box">
                    <h3 className="count">150</h3>
                    <span>+</span>
                  </div>
                  <p className="counter-two__text">Projects Completed</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 mb-4 mb-xl-0">
              <div className="counter-two__single">
                <div className="counter-two__icon-inner">
                  <div className="counter-two__icon">
                    <span className="icon-trophy" />
                  </div>
                </div>
                <div className="counter-two__content">
                  <div className="counter-two__count-box">
                    <h3 className="count">99</h3>
                    <span>%</span>
                  </div>
                  <p className="counter-two__text">Customer Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 mb-4 mb-md-0">
              <div className="counter-two__single">
                <div className="counter-two__icon-inner">
                  <div className="counter-two__icon">
                    <span className="icon-user" />
                  </div>
                </div>
                <div className="counter-two__content">
                  <div className="counter-two__count-box">
                    <h3 className="count">25</h3>
                    <span>+</span>
                  </div>
                  <p className="counter-two__text">Certified Specialists</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="counter-two__single">
                <div className="counter-two__icon-inner">
                  <div className="counter-two__icon">
                    <span className="icon-calendar" />
                  </div>
                </div>
                <div className="counter-two__content">
                  <div className="counter-two__count-box">
                    <h3 className="count">10</h3>
                    <span>+</span>
                  </div>
                  <p className="counter-two__text">Years In Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-two">
        <div className="why-choose-two__shape-1">
          <img src="/assets/images/shapes/why-choose-two-shape-1.png" alt="" />
        </div>
        <div className="why-choose-two__shape-2" />
        <div className="why-choose-two__shape-3" />
        <div className="container">
          <div className="row align-items-center">
            {/* Content on Left Side */}
            <div className="col-xl-6 col-lg-6">
              <div className="why-choose-two__left" style={{ marginTop: 0, marginRight: 0 }}>
                <div className="section-title text-left mb-4">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline-shape-1" />
                    <span className="section-title__tagline-shape-2" />
                    <span className="section-title__tagline">Why Choose Us</span>
                    <span className="section-title__tagline-shape-2" />
                    <span className="section-title__tagline-shape-1" />
                  </div>
                  <h2 className="section-title__title" style={{ fontSize: "38px", lineHeight: "1.25", marginTop: "12px" }}>
                    Why Choose <span>NAPSE</span> As Your Technology Partner
                  </h2>
                </div>

                <div className="why-choose-points-list" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div className="why-choose-item" style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "12px",
                        background: "rgba(61, 114, 252, 0.12)",
                        border: "1px solid rgba(61, 114, 252, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--techguru-base)",
                        fontSize: "19px"
                      }}
                    >
                      <i className="fas fa-handshake" />
                    </div>
                    <div>
                      <h4 style={{ color: "#ffffff", fontSize: "18px", fontWeight: "700", marginBottom: "5px" }}>
                        Reliable Technology Partner
                      </h4>
                      <p style={{ color: "var(--techguru-gray)", fontSize: "15px", lineHeight: "24px", margin: 0, fontFamily: "var(--techguru-font)" }}>
                        We aim to build long-term relationships with our customers through reliable products and professional service.
                      </p>
                    </div>
                  </div>

                  <div className="why-choose-item" style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "12px",
                        background: "rgba(61, 114, 252, 0.12)",
                        border: "1px solid rgba(61, 114, 252, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--techguru-base)",
                        fontSize: "19px"
                      }}
                    >
                      <i className="fas fa-cogs" />
                    </div>
                    <div>
                      <h4 style={{ color: "#ffffff", fontSize: "18px", fontWeight: "700", marginBottom: "5px" }}>
                        End-to-End Solutions
                      </h4>
                      <p style={{ color: "var(--techguru-gray)", fontSize: "15px", lineHeight: "24px", margin: 0, fontFamily: "var(--techguru-font)" }}>
                        From consultation and procurement to installation and support, we can assist throughout the technology lifecycle.
                      </p>
                    </div>
                  </div>

                  <div className="why-choose-item" style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "12px",
                        background: "rgba(61, 114, 252, 0.12)",
                        border: "1px solid rgba(61, 114, 252, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--techguru-base)",
                        fontSize: "19px"
                      }}
                    >
                      <i className="fas fa-tags" />
                    </div>
                    <div>
                      <h4 style={{ color: "#ffffff", fontSize: "18px", fontWeight: "700", marginBottom: "5px" }}>
                        Competitive Pricing
                      </h4>
                      <p style={{ color: "var(--techguru-gray)", fontSize: "15px", lineHeight: "24px", margin: 0, fontFamily: "var(--techguru-font)" }}>
                        Our strong vendor and distribution network enables us to source solutions at competitive prices.
                      </p>
                    </div>
                  </div>

                  <div className="why-choose-item" style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "12px",
                        background: "rgba(61, 114, 252, 0.12)",
                        border: "1px solid rgba(61, 114, 252, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--techguru-base)",
                        fontSize: "19px"
                      }}
                    >
                      <i className="fas fa-user-check" />
                    </div>
                    <div>
                      <h4 style={{ color: "#ffffff", fontSize: "18px", fontWeight: "700", marginBottom: "5px" }}>
                        Customer Focused
                      </h4>
                      <p style={{ color: "var(--techguru-gray)", fontSize: "15px", lineHeight: "24px", margin: 0, fontFamily: "var(--techguru-font)" }}>
                        Every solution is tailored to the specific requirements, budget, and objectives of our clients.
                      </p>
                    </div>
                  </div>

                  <div className="why-choose-item" style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "12px",
                        background: "rgba(61, 114, 252, 0.12)",
                        border: "1px solid rgba(61, 114, 252, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--techguru-base)",
                        fontSize: "19px"
                      }}
                    >
                      <i className="fas fa-chart-line" />
                    </div>
                    <div>
                      <h4 style={{ color: "#ffffff", fontSize: "18px", fontWeight: "700", marginBottom: "5px" }}>
                        Business Driven
                      </h4>
                      <p style={{ color: "var(--techguru-gray)", fontSize: "15px", lineHeight: "24px", margin: 0, fontFamily: "var(--techguru-font)" }}>
                        We focus on delivering technology solutions that support business continuity, productivity, security, and growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image on Right Side */}
            <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
              <div
                className="why-choose-two__right"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  marginLeft: 0
                }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
                    width: "100%",
                    maxWidth: "520px"
                  }}
                >
                  <img
                    src="/assets/images/resources/why-choose-us-woman.jpg"
                    alt="Why Choose NAPSE"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "24px 28px",
                      background: "linear-gradient(0deg, rgba(11, 25, 44, 0.95) 0%, rgba(11, 25, 44, 0) 100%)",
                      color: "#fff"
                    }}
                  >
                    <span style={{ color: "var(--techguru-base)", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
                      Turnkey Technology
                    </span>
                    <h5 style={{ color: "#fff", fontSize: "18px", fontWeight: "700", margin: "4px 0 0" }}>
                      Transforming IT into Your Competitive Edge
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="portfolio-two">
        <div className="portfolio-two__shape-1">
          <img src="/assets/images/shapes/portfolio-two-shape-1.png" alt="" />
        </div>
        <div className="portfolio-two__shape-2" />
        <div className="portfolio-two__shape-3" />
        <div className="portfolio-two__shape-4" />
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline-shape-1" />
              <span className="section-title__tagline-shape-2" />
              <span className="section-title__tagline">Our Portfolio</span>
              <span className="section-title__tagline-shape-2" />
              <span className="section-title__tagline-shape-1" />
            </div>
            <h2 className="section-title__title">
              Our Recent <span>Innovative</span> Projects &amp; Case Studies
            </h2>
          </div>

          <ul className="portfolio-two__box list-unstyled">
            {portfolioItemsTwo.map((item, idx) => (
              <li
                key={item.id}
                className={activePortfolioIndex === idx ? "active" : ""}
                onMouseEnter={() => setActivePortfolioIndex(idx)}
              >
                <div className="portfolio-two__box-content">
                  <div
                    className="single-portfolio-two__bg"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="portfolio-two__title">
                    <h3>
                      <Link to={item.link}>{item.title}</Link>
                    </h3>
                  </div>
                  <div className="portfolio-two__content-box">
                    <div className="portfolio-two__icon">
                      <Link to={item.link}>
                        <span className="icon-right-arrow-2" />
                      </Link>
                    </div>
                    <div className="portfolio-two__title-box">
                      <h3 className="portfolio-two__title-2">
                        <Link to={item.link}>{item.title}</Link>
                      </h3>
                      <p className="portfolio-two__text">{item.category}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Work Process */}
      <section className="process-two">
        <div
          className="process-two__bg"
          style={{ backgroundImage: "url(/assets/images/backgrounds/process-two-bg.jpg)" }}
        />
        <div
          className="process-two__bg-shape"
          style={{ backgroundImage: "url(/assets/images/shapes/process-two-bg-shape.png)", display: "block" }}
        />
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline-shape-1" />
              <span className="section-title__tagline-shape-2" />
              <span className="section-title__tagline">How We Work</span>
              <span className="section-title__tagline-shape-2" />
              <span className="section-title__tagline-shape-1" />
            </div>
            <h2 className="section-title__title">
              Our 4-Step <span>Strategic</span> Workflow
            </h2>
          </div>

          <ul className="process-two__list list-unstyled row">
            <li className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-two__single">
                <div className="process-two__count" />
                <h3 className="process-two__title">Discovery &amp; Audit</h3>
                <p className="process-two__text" style={{ color: "var(--techguru-gray)" }}>
                  We assess your current tech stack, identify vulnerabilities, and define success metrics.
                </p>
              </div>
            </li>
            <li className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-two__single">
                <div className="process-two__count" />
                <h3 className="process-two__title">Architectural Design</h3>
                <p className="process-two__text" style={{ color: "var(--techguru-gray)" }}>
                  Formulating high-availability blueprints, security policies, and technical roadmaps.
                </p>
                <div className="process-two__shape-1">
                  <img src="/assets/images/shapes/process-two-shape-1.png" alt="" />
                </div>
                <div className="process-two__shape-2">
                  <img src="/assets/images/shapes/process-two-shape-2.png" alt="" />
                </div>
              </div>
            </li>
            <li className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-two__single">
                <div className="process-two__count" />
                <h3 className="process-two__title">Agile Implementation</h3>
                <p className="process-two__text" style={{ color: "var(--techguru-gray)" }}>
                  Deploying systems, integrating software, and testing defenses with continuous feedback.
                </p>
              </div>
            </li>
            <li className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-two__single">
                <div className="process-two__count" />
                <h3 className="process-two__title">24/7 Managed Support</h3>
                <p className="process-two__text" style={{ color: "var(--techguru-gray)" }}>
                  Continuous telemetry monitoring, proactive patching, and regular optimization audits.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-two">
        <div className="testimonial-two__shape-1" />
        <div className="testimonial-two__shape-2" />
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline-shape-1" />
              <span className="section-title__tagline-shape-2" />
              <span className="section-title__tagline">Client Feedback</span>
              <span className="section-title__tagline-shape-2" />
              <span className="section-title__tagline-shape-1" />
            </div>
            <h2 className="section-title__title">
              What Our <span>Partners Say</span> About NAPSE
            </h2>
          </div>

          <div className="testimonial-two__carousel owl-carousel owl-theme">
            <div className="row mt-4">
              {homeTestimonials.slice(testimonialPage * 3, testimonialPage * 3 + 3).map((t) => (
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
                        <p className="testimonial-two__sub-title">{t.role}</p>
                      </div>
                    </div>
                    <div className="testimonial-two__quote">
                      <span className="icon-quote" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="owl-dots">
              <button
                type="button"
                className={`owl-dot ${testimonialPage === 0 ? "active" : ""}`}
                onClick={() => setTestimonialPage(0)}
                aria-label="Testimonial slide 1"
              >
                <span />
              </button>
              <button
                type="button"
                className={`owl-dot ${testimonialPage === 1 ? "active" : ""}`}
                onClick={() => setTestimonialPage(1)}
                aria-label="Testimonial slide 2"
              >
                <span />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-two">
        <div
          className="contact-two__bg"
          style={{ backgroundImage: "url(/assets/images/backgrounds/contact-two-bg.jpg)" }}
        />
        <div className="contact-two__shape-1">
          <img src="/assets/images/shapes/contact-two-shape-1.png" alt="" />
        </div>
        <div className="contact-two__shape-2" />
        <ul className="contact-two__sliding-text-list list-unstyled" style={{ animation: "marquee 30s linear infinite", whiteSpace: "nowrap" }}>
          <li><h2 className="contact-two__sliding-text-title">Get In Touch</h2></li>
          <li><h2 className="contact-two__sliding-text-title">Get In Touch</h2></li>
          <li><h2 className="contact-two__sliding-text-title">Get In Touch</h2></li>
        </ul>

        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="contact-two__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline-shape-1" />
                    <span className="section-title__tagline-shape-2" />
                    <span className="section-title__tagline">Connect With Us</span>
                    <span className="section-title__tagline-shape-2" />
                    <span className="section-title__tagline-shape-1" />
                  </div>
                  <h2 className="section-title__title">
                    Connect with Us <span>For Any</span> Inquiries
                  </h2>
                </div>
                <p className="contact-two__text" style={{ fontSize: "16px", color: "var(--techguru-gray)", marginBottom: "30px", lineHeight: "26px" }}>
                  Schedule a technical discovery session with our senior architects in Abu Dhabi.
                  We respond to all enterprise inquiries within 24 hours.
                </p>
                <ul className="contact-two__contact-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-phone-call" />
                    </div>
                    <div className="content">
                      <span>Need help? Call us</span>
                      <p><a href="tel:971521475975">+971 52 147 5975</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-search-mail" />
                    </div>
                    <div className="content">
                      <span>Email us directly</span>
                      <p><a href="mailto:cst@napse.ae">cst@napse.ae</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-pin" />
                    </div>
                    <div className="content">
                      <span>Office location</span>
                      <p style={{ fontSize: "18px" }}>Abu Dhabi, UAE</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-7 col-lg-7">
              <div className="contact-two__right">
                <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "25px", color: "var(--techguru-white)" }}>
                  Request a Consultation
                </h3>
                <form onSubmit={handleContactSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h4 className="contact-one__input-title">Full Name *</h4>
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                        <div className="contact-one__input-icon">
                          <span className="icon-user" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h4 className="contact-one__input-title">Email Address *</h4>
                      <div className="contact-one__input-box">
                        <input
                          type="email"
                          placeholder="e.g. john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                        <div className="contact-one__input-icon">
                          <span className="icon-search-mail" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h4 className="contact-one__input-title">Phone Number</h4>
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          placeholder="+971 52 147 5975"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        />
                        <div className="contact-one__input-icon">
                          <span className="icon-phone-call" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h4 className="contact-one__input-title">Subject</h4>
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          placeholder="IT Consultation"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                        <div className="contact-one__input-icon">
                          <span className="icon-comment" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <h4 className="contact-one__input-title">Message *</h4>
                      <div className="contact-one__input-box text-message-box">
                        <textarea
                          placeholder="Tell us about your project requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>
                      <div className="contact-one__btn-box">
                        <button type="submit" className="thm-btn" disabled={isSubmitting}>
                          {isSubmitting ? "Sending Request..." : "Submit Consultation Request"}
                          <span className="icon-right-arrow" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {contactStatus.type === "success" && (
                  <div
                    className="alert alert-success mt-4"
                    style={{
                      padding: "14px 20px",
                      background: "rgba(40, 167, 69, 0.2)",
                      color: "#6ce388",
                      border: "1px solid #28a745",
                      borderRadius: "10px"
                    }}
                  >
                    <strong>Success!</strong> {contactStatus.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-two" style={{ paddingBottom: "35px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="blog-two__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline-shape-1" />
                    <span className="section-title__tagline-shape-2" />
                    <span className="section-title__tagline">Insights &amp; Articles</span>
                    <span className="section-title__tagline-shape-2" />
                    <span className="section-title__tagline-shape-1" />
                  </div>
                  <h2 className="section-title__title">
                    Latest <span>Industry Insights</span> &amp; Technology Trends
                  </h2>
                </div>
                <p className="blog-two-text">
                  Stay updated with deep dives, architecture reviews, and cybersecurity alerts from our senior technology architects.
                </p>
                <div className="blog-two__top-btn-box">
                  <Link to="/blog" className="thm-btn">
                    View All Posts<span className="icon-right-arrow" />
                  </Link>
                </div>
                <div className="blog-two__single">
                  <div className="blog-two__img">
                    <img src="/assets/images/blog/blog-2-1.jpg" alt="Featured Article" />
                    <div className="blog-two__tags">
                      <span>CYBERSECURITY</span>
                    </div>
                  </div>
                  <div className="blog-two__content">
                    <div className="blog-two__user">
                      <div className="blog-two__user-img">
                        <img src="/assets/images/blog/blog-two-user-1.jpg" alt="Pushpendra" />
                      </div>
                      <p className="blog-two__user-title">Pushpendra</p>
                    </div>
                    <ul className="blog-two__meta list-unstyled">
                      <li>
                        <Link to="/Key-trends-shaping-the-future-of-technology">
                          <span className="icon-clock-outline" /> May 15, 2026
                        </Link>
                      </li>
                    </ul>
                    <h3 className="blog-two__title">
                      <Link to="/Key-trends-shaping-the-future-of-technology">
                        Key Trends Shaping the Future of Enterprise Technology
                      </Link>
                    </h3>
                    <p className="blog-two__text" style={{ color: "var(--techguru-gray)" }}>
                      How automated AI threat detection and Zero-Trust frameworks are reshaping enterprise defense.
                    </p>
                    <div className="blog-two__btn-box">
                      <Link to="/Key-trends-shaping-the-future-of-technology" className="thm-btn">
                        Read Article <span className="icon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="blog-two__right">
                <div className="blog-two__single-two">
                  <div className="blog-two__img-two">
                    <img src="/assets/images/blog/blog-2-2.jpg" alt="Cloud Native" />
                  </div>
                  <div className="blog-two__content-two">
                    <div className="blog-two__user-two">
                      <div className="blog-two__user-two-img">
                        <img src="/assets/images/blog/blog-two-user-2.jpg" alt="Admin" />
                      </div>
                      <p className="blog-two__user-two-title">Admin</p>
                    </div>
                    <div className="blog-two__tags-two">
                      <span>CLOUD NATIVE</span>
                    </div>
                    <h3 className="blog-two__title-two">
                      <Link to="/blog-details">
                        Migrating Legacy Monoliths to High-Availability Cloud
                      </Link>
                    </h3>
                    <ul className="blog-two__meta-two list-unstyled">
                      <li>
                        <Link to="/blog-details">
                          <span className="icon-clock-outline" /> May 10, 2026
                        </Link>
                      </li>
                    </ul>
                    <div className="blog-two__btn-box-two">
                      <Link to="/blog-details" className="thm-btn">
                        Read More <span className="icon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="blog-two__single-two">
                  <div className="blog-two__img-two">
                    <img src="/assets/images/blog/blog-2-3.jpg" alt="Data Privacy" />
                  </div>
                  <div className="blog-two__content-two">
                    <div className="blog-two__user-two">
                      <div className="blog-two__user-two-img">
                        <img src="/assets/images/blog/blog-two-user-3.jpg" alt="NAPSE Tech" />
                      </div>
                      <p className="blog-two__user-two-title">NAPSE Tech</p>
                    </div>
                    <div className="blog-two__tags-two">
                      <span>DATA PRIVACY</span>
                    </div>
                    <h3 className="blog-two__title-two">
                      <Link to="/blog-details">
                        Compliance &amp; Data Protection in the UAE &amp; GCC Region
                      </Link>
                    </h3>
                    <ul className="blog-two__meta-two list-unstyled">
                      <li>
                        <Link to="/blog-details">
                          <span className="icon-clock-outline" /> May 04, 2026
                        </Link>
                      </li>
                    </ul>
                    <div className="blog-two__btn-box-two">
                      <Link to="/blog-details" className="thm-btn">
                        Read More <span className="icon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
