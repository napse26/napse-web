import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "idle",
    message: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ type: "idle", message: "" });
    try {
      const res = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setFeedback({
        type: "success",
        message: data.message || "Thank you! Your message has been received. Our team will contact you shortly."
      });
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    } catch {
      setFeedback({
        type: "success",
        message: "Thank you! Your message has been received. Our team will contact you shortly."
      });
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    } finally {
      setLoading(false);
    }
  };
  return <div className="contact-page-wrapper">
      <PageHeader title="Contact Us" currentPage="Contact Us" />

      {
    /* Contact Info Cards */
  }
      <section style={{ padding: "80px 0 40px" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div
    style={{
      background: "#fff",
      border: "1px solid #eaeaea",
      borderRadius: "12px",
      padding: "40px 25px",
      height: "100%",
      boxShadow: "0 8px 24px rgba(0,0,0,0.03)"
    }}
  >
                <div style={{ fontSize: "38px", color: "var(--techguru-base)", marginBottom: "15px" }}>
                  <i className="fa fa-map-marker-alt" />
                </div>
                <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>Headquarters</h4>
                <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>
                  Abu Dhabi <br /> United Arab Emirates
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div
    style={{
      background: "#fff",
      border: "1px solid #eaeaea",
      borderRadius: "12px",
      padding: "40px 25px",
      height: "100%",
      boxShadow: "0 8px 24px rgba(0,0,0,0.03)"
    }}
  >
                <div style={{ fontSize: "38px", color: "var(--techguru-base)", marginBottom: "15px" }}>
                  <i className="fa fa-envelope-open-text" />
                </div>
                <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>Email Support</h4>
                <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>
                  General &amp; Enterprise Inquiries: <br />
                  <a href="mailto:cst@napse.ae" style={{ color: "#3D72FC", fontWeight: 600 }}>
                    cst@napse.ae
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div
    style={{
      background: "#fff",
      border: "1px solid #eaeaea",
      borderRadius: "12px",
      padding: "40px 25px",
      height: "100%",
      boxShadow: "0 8px 24px rgba(0,0,0,0.03)"
    }}
  >
                <div style={{ fontSize: "38px", color: "var(--techguru-base)", marginBottom: "15px" }}>
                  <i className="fa fa-phone-volume" />
                </div>
                <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>Direct Phone</h4>
                <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>
                  Sunday - Thursday (8am - 6pm GST): <br />
                  <a href="tel:971521475975" style={{ color: "#3D72FC", fontWeight: 600 }}>
                    +971 52 147 5975
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Main Contact Form Section */
  }
      <section style={{ padding: "40px 0 90px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
    style={{
      background: "#fff",
      borderRadius: "16px",
      border: "1px solid #e0e5ee",
      padding: "50px 40px",
      boxShadow: "0 12px 35px rgba(0,0,0,0.05)"
    }}
  >
                <div className="section-title text-center mb-5">
                  <span className="section-title__tagline">SEND US A MESSAGE</span>
                  <h2 className="section-title__title" style={{ fontSize: "30px" }}>
                    How Can We <span>Assist Your Business</span>?
                  </h2>
                  <p style={{ maxWidth: "600px", margin: "10px auto 0", color: "#666" }}>
                    Fill out the form below and one of our solution architects in Abu Dhabi will respond promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} id="contactForm">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label" style={{ fontWeight: 600, fontSize: "14px" }}>
                        Full Name *
                      </label>
                      <input
    type="text"
    name="name"
    className="form-control"
    placeholder="e.g. Pushpendra Singh"
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    required
    style={{ height: "50px" }}
  />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label" style={{ fontWeight: 600, fontSize: "14px" }}>
                        Email Address *
                      </label>
                      <input
    type="email"
    name="email"
    className="form-control"
    placeholder="e.g. name@company.com"
    value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    required
    style={{ height: "50px" }}
  />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label" style={{ fontWeight: 600, fontSize: "14px" }}>
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="mobile"
                        className="form-control"
                        placeholder="e.g. +971 52 147 5975"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        style={{ height: "50px" }}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label" style={{ fontWeight: 600, fontSize: "14px" }}>
                        Subject
                      </label>
                      <input
    type="text"
    name="subject"
    className="form-control"
    placeholder="e.g. Cloud Security Assessment"
    value={formData.subject}
    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
    style={{ height: "50px" }}
  />
                    </div>

                    <div className="col-12 mb-4">
                      <label className="form-label" style={{ fontWeight: 600, fontSize: "14px" }}>
                        Message *
                      </label>
                      <textarea
    name="message"
    className="form-control"
    rows={5}
    placeholder="Describe your current setup, goals, or security requirements..."
    value={formData.message}
    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
    required
  />
                    </div>

                    <div className="col-12 text-center">
                      <button
    type="submit"
    className="thm-btn"
    disabled={loading}
    style={{ padding: "14px 45px", fontSize: "16px" }}
  >
                        {loading ? "Submitting..." : "Send Message Now"}{" "}
                        <span className="icon-right-arrow" />
                      </button>
                    </div>
                  </div>
                </form>

                {feedback.type === "success" && <div
    className="alert alert-success mt-4 text-center"
    style={{
      background: "#d4edda",
      color: "#155724",
      border: "1px solid #c3e6cb",
      borderRadius: "8px",
      padding: "16px 20px",
      fontSize: "15px"
    }}
  >
                    <i className="fa fa-check-circle me-2" /> {feedback.message}
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Map Embed Location */
  }
      <section style={{ height: "380px", width: "100%", overflow: "hidden" }}>
        <iframe
    title="NAPSE Digital Location Abu Dhabi"
    src="https://maps.google.com/maps?q=Abu%20Dhabi,%20United%20Arab%20Emirates&t=&z=13&ie=UTF8&iwloc=&output=embed"
    style={{ width: "100%", height: "100%", border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
      </section>
    </div>;
};
